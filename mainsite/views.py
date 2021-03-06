from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render,redirect,get_object_or_404,Http404
from django.http import HttpResponse
import csv, json, itertools, re
import os,datetime
import io
from json import dumps
from django.http import JsonResponse
from django.http import FileResponse
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.pagesizes import portrait
from django.contrib import messages
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from .form import UserCreationForm,UserProfileForm
from .models import Profile,Complain,Replies,Re_Replies,Notifications
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,logout
from django.contrib.auth import login as user_login
# from ..MeroComplain import settings
from django.core.mail import EmailMessage
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import force_bytes,force_text,DjangoUnicodeDecodeError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.views.generic import View
from django.contrib.auth.decorators import login_required

from reportlab.platypus import paragraph

import re
from django.conf import settings
from django.contrib.auth import REDIRECT_FIELD_NAME
# Avoid shadowing the login() view below.
from django.contrib.auth import login as auth_login
from django.http import HttpResponseRedirect
# from django.shortcuts import render_to_response
from django.template import RequestContext
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from .form import AuthenticationRememberMeForm


@login_required(login_url='login')
def home(request):
    # print(request.user.get_full_name())
    # print(request.user.first_name)
    # print(request.user.profile.Profile_Picture)
    contex={'user':request.user}
    # print(total_ntfs)
    return render(request,'mainsite/home.html',contex)

@login_required(login_url='login')
def Count_Unseen_Notifications(request):
    ntfs = Notifications.objects.get(User_ID=request.user)
    new_notifications = eval(ntfs.New_Notifications)
    # total_count = str(len(new_notifications))
    total_count=0
    for nts in new_notifications:
        if nts[2]=='unseen':
            total_count=total_count+1
    return HttpResponse(total_count)


@login_required(login_url='login')
def viewnotices(request):
    contex = {'user': request.user}
    ntfs = Notifications.objects.get(User_ID=request.user)
    new_notifications = eval(ntfs.New_Notifications)
    m_lst=[]
    for notic in new_notifications:
        if notic[0]=='new_user':
            n_usr = User.objects.get(id=notic[1])
            m_lst.append(['new_user',n_usr,notic[2],len(m_lst)])

        if notic[0] == 'new_complain':
            n_usr = Complain.objects.get(id=notic[1])
            m_lst.append(['new_complain', n_usr,notic[2],len(m_lst)])

        if notic[0]=='new_replies':
            n_usr = Replies.objects.get(id=notic[1])
            m_lst.append(['new_replies',n_usr,notic[2],len(m_lst)])

        if notic[0]=='new_re_replies':
            n_usr = Re_Replies.objects.get(id=notic[1])
            m_lst.append(['new_re_replies',n_usr,notic[2],len(m_lst)])

        if notic[0]=='new_complain_view':
            com=Complain.objects.get(id=notic[1])
            usr=User.objects.get(id=notic[3])
            m_lst.append(['new_complain_view',com,notic[2],len(m_lst),usr,notic[4],notic[5]])

        if notic[0]=='new_complain_shared':
            com = Complain.objects.get(id=notic[1])
            usr = User.objects.get(id=notic[3])
            m_lst.append(['new_complain_shared',com,notic[2],len(m_lst),usr,notic[4],notic[5]-1])

        if notic[0]=='new_complain_reported':
            com = Complain.objects.get(id=notic[1])
            usr = User.objects.get(id=notic[3])
            m_lst.append(['new_complain_reported',com,notic[2],len(m_lst),usr,notic[4],notic[5]-1])
            print(notic)

    contex['notices']=reversed(m_lst)
    # print(m_lst)
    return render(request, 'mainsite/view_notices.html', contex)

def profile(request):
    contex={'user': request.user}
    return render(request, 'mainsite/profile.html',contex)

def login(request):
    # print(request)
    if request.method=="POST":
        ac_type=request.POST.get('ac_type')
        username = request.POST.get('username')
        psw = request.POST.get('password')
        user = authenticate(request, username=username,
                            password=psw)  # returns username if user with given usernsme and password exists
        # ohterwise return None
        if str(user) == str(username):
            if (ac_type == 'staff'):
                c_user=User.objects.get(username=username)
                status=c_user.profile.Status
                if(status=='Staff'):
                    user_login(request, user)
                    return redirect('staff')
                else:
                    messages.error(request, f'Insufficient Permission!')
                    return render(request, 'mainsite/login.html')
            if (ac_type == 'admin'):
                c_user = User.objects.get(username=username)
                status = c_user.profile.Status
                if (status == 'Admin'):
                    user_login(request, user)
                    return redirect('administrator')
                else:
                    messages.error(request, f'Insufficient Permission!')
                    return render(request, 'mainsite/login.html')
            if (ac_type == 'user'):
                c_user = User.objects.get(username=username)
                status = c_user.profile.Status
                if (status == 'User'):
                    user_login(request, user)
                    return redirect('home')
                else:
                    messages.error(request, f'Insufficient Permission!')
                    return render(request, 'mainsite/login.html')

            # print(request.POST.get('remember'))
            # if request.POST.get('remember')=='on':
            #     print('checked')
            #     # remember_me_login(request)
            messages.error(request, f'Something went wrong, Please contact Administrator!')
            return render(request, 'mainsite/login.html')

        else:
            messages.error(request, f'Incorrect username or password!')
            return render(request, 'mainsite/login.html')
    return render(request,'mainsite/login.html')

def signup(request):

    return render(request,'mainsite/Signup.html')


def email_validate(request):
    try:
        get_object_or_404(User,email=request.GET.get('email'))
        return HttpResponse('false')
    except Http404:
        return HttpResponse('true')

def user_validate(request):
    try:
        get_object_or_404(User, username=request.GET.get('num'))
        return HttpResponse('false')
    except Http404:
        return HttpResponse('true')

def dashboard(request):
    coms = Complain.objects.all().exclude(User_ID=request.user).order_by('-DateTime')
    data = []
    for com in coms:
        reps = Replies.objects.filter(Complain_ID=com).order_by('-DateTime')
        if len(reps) == 0:
            data.append([com, []])
        else:
            data.append([com, reps])

    contex = {'datas': data}
    return render(request,'mainsite/Dashboard.html',contex)

@login_required(login_url='login')
def myComplain(request):
    # coms=Complain.objects.all().order_by('-DateTime')
    # u=User.objects.get(username=user_id)
    coms=Complain.objects.filter(User_ID=request.user).order_by('-DateTime')
    data=[]
    for com in coms:
        reps=Replies.objects.filter(Complain_ID=com).order_by('-DateTime')
        if len(reps)==0:
            data.append([com,[]])
        else:
            data.append([com, reps])
    # print(request.user)
    # coms=get_object_or_404(Complain,User_ID=user_id)
    # for x in coms:
    #     print(x)
    contex={'datas':data}
    return render(request,'mainsite/mycomplain.html',contex)
@login_required(login_url='login')
def complains(request):
    coms = Complain.objects.all().order_by('-DateTime')
    # for x in coms:
    #     print(x)
    contex = {'complain': coms}
    return render(request, 'mainsite/complains_staff.html', contex)

@login_required(login_url='login')
def Users_Admin(request):
    users = User.objects.all()
    # for x in coms:
    #     print(x)
    contex = {'users': users}
    return render(request, 'mainsite/users_admin.html', contex)

@login_required(login_url='login')
def viewcomplainstaff(request):
    # print(request)
    # while 1:
    #     pass
    complain_id=request.GET.get('complain_id')
    complain=Complain.objects.get(id=complain_id)
    contex = {'complain':complain}
    return render(request, 'mainsite/view_complain_staff.html', contex)
def report(request):

    return render(request,'mainsite/report.html')

def faq(request):

    return render(request,'mainsite/faq.html')
@login_required(login_url='login')
def newComplain(request):
    today=datetime.datetime.now().strftime("%B %d, %Y")
    return render(request,'mainsite/newcomplain.html',{'today':today})

@login_required(login_url='login')
def viewcomplain(request):
    complain_id = request.GET.get('complain_id')
    complain = Complain.objects.get(id=complain_id)
    reps=Replies.objects.filter(Complain_ID=complain).order_by('-DateTime')

    # for focusing to selected replies
    try:
        repl_id=request.GET.get('reply_id')
        contex = {'complain': complain}
        replies = []
        for rep in reps:
            re_rep = Re_Replies.objects.filter(Replies_ID=rep).order_by('-DateTime')
            replies.append([rep, re_rep])

        contex['replies'] = replies
        contex['focus_to']=str(repl_id)
        return render(request, 'mainsite/viewcomplain.html', contex)

    except:
        pass

    # end of focusing

    contex = {'complain': complain}
    replies=[]
    for rep in reps:
        re_rep=Re_Replies.objects.filter(Replies_ID=rep).order_by('-DateTime')
        # try:
        #     re_rep=get_object_or_404(Re_Replies, Replies_ID=rep)
        # except Http404:
        #     re_rep=[]
        # print([rep,re_rep])
        replies.append([rep,re_rep])

    contex['replies']=replies
    contex['focus_to']='None'
    # print("reps",reps)
    # print("re_rep",(re_rep))
    return render(request, 'mainsite/viewcomplain.html', contex)

@login_required(login_url='login')
def SaveComplain(request):
    # print(request.POST)
    user=request.user
    dep=request.POST.get('dep')
    sub = request.POST.get('sub')
    bdy = request.POST.get('bdy')
    pri = request.POST.get('pri')
    attch=request.FILES
    try:
        attch=request.FILES['attch']
    except:
        attch=None
    # print(attch, pri)
    com=Complain(User_ID=user,Department=dep,Subject=sub,Body=bdy,Priority=pri,Attachments=attch)
    com.save_with_notification_update()
    Complain.refresh_from_db(com)
    return redirect('mycomplain')

@login_required(login_url='login')
def staff(request):
    return render(request,'mainsite/staff.html')
@login_required(login_url='login')
def administrator(request):
    return render(request,'mainsite/admin.html')



def SaveUser(request):
    try:
        Files = request.FILES
        data=request.POST

        docnum = data['docnum']
        name = data['name']
        email = data['email']
        pass1 = data['pass1']

        user = User.objects.create_user(username=docnum, email=email,password=pass1)
        user.save()
        User.refresh_from_db(user)
        user.first_name=name
        user.is_active=False
        user.save()

        dob = data['dob']
        gender = data['gender']
        mobile = data['mobile']
        country = data['country']
        provience = data['provience']
        district = data['district']
        vdc = data['vdc']
        tole = data['tole']
        ward = data['ward']
        pcode = data['pcode']
        dtype = data['dtype']
        photo = Files['photo']
        front = Files['front']
        rare = Files['rare']

        # path=settings.MEDIA_ROOT+"/Users/"+str(docnum)
        path="D:/Hackarhon 2020/MeroComplain/media/Users/"+str(docnum)
        print(path)

        try:
            os.mkdir(path)
            pro = Profile()
            pro.Profile_Picture.upload_to = path
            pro.Document_Front.upload_to = path
            pro.Document_Rare.upload_to = path
            pro.Status="User"
            pro.User_ID=user
            pro.Phone_Number=mobile
            pro.Date_of_Birth=dob
            pro.Gender=gender
            pro.Address=str(country+", "+provience+", "+district+", "+vdc+", "+tole+", Ward No- "+ward)
            pro.Postal_Code=pcode
            pro.Document_Type=dtype
            pro.Document_Number=docnum
            pro.Document_Front=front
            pro.Document_Rare=rare
            pro.Profile_Picture=photo
            pro.save()
            Profile.refresh_from_db(pro)
        except:
            print('exception')
            pro=Profile(Status="User",User_ID=user,Phone_Number=mobile,Date_of_Birth=dob,Gender=gender,
                    Address=str(country+", "+provience+", "+district+", "+vdc+", "+tole+", Ward No- "+ward),
                    Postal_Code=pcode,Document_Type=dtype,Document_Number=docnum,Document_Front=front,Document_Rare=rare,
                    Profile_Picture=photo)
            pro.save()
            Profile.refresh_from_db(pro)

        usr = User.objects.get(username=docnum)
        current_domain = get_current_site(request)
        email_subject = "Account activation"
        ttoken = PasswordResetTokenGenerator()
        message = render_to_string('mainsite/activate.html',
                                   {
                                       'user': usr,
                                       'username':user,
                                       'domain': current_domain,
                                       'uid': urlsafe_base64_encode(force_bytes(usr.pk)),
                                       'token': ttoken.make_token(usr)
                                   })

        email_message = EmailMessage(
            email_subject,
            message,
            settings.EMAIL_HOST_USER,
            [usr.email]
        )
        email_message.send()

        message="An account verification link has been sent to your email address: <u>"+email+"</u>. Please check your inbox for further procedure."
        return render(request,'mainsite/verification.html',context={'message':message})
    except:
        message="Something went wrong, Please try again later or contact Administrator."
        return render(request, 'mainsite/error.html', context={'message': message})


class ActivateAccount(View):
    def get(self,request,uidb64,token):
        ttk=PasswordResetTokenGenerator()
        try:
            uid=force_text(urlsafe_base64_decode(uidb64))
            user=User.objects.get(pk=uid)
        except Exception:
            user=None
        if user is not None and ttk.check_token(user=user,token=token):
            user.is_active=True
            user.save()
            return redirect('login')
        message = "Something went wrong, Please try again later or contact Administrator."
        return render(request, 'mainsite/error.html', context={'message': message})



@csrf_protect
@never_cache
def remember_me_login(request, template_name='mainsite/login.html',
                      redirect_field_name=REDIRECT_FIELD_NAME,
                      authentication_form=AuthenticationRememberMeForm):
    """
    Based on login view cribbed from
    https://github.com/django/django/blob/1.2.7/django/contrib/auth/views.py#L25

    Displays the login form with a remember me checkbox and handles the
    login action.

    The authentication_form parameter has been changed from
    ``django.contrib.auth.forms.AuthenticationForm`` to
    ``remember_me.forms.AuthenticationRememberMeForm``.  To change this, pass a
    different form class as the ``authentication_form`` parameter.

    """

    redirect_to = request.REQUEST.get(redirect_field_name, '')

    if request.method == "POST":
        form = authentication_form(data=request.POST)
        if form.is_valid():
            # Light security check -- make sure redirect_to isn't garbage.
            if not redirect_to or ' ' in redirect_to:
                redirect_to = settings.LOGIN_REDIRECT_URL

            # Heavier security check -- redirects to http://example.com should
            # not be allowed, but things like /view/?param=http://example.com
            # should be allowed. This regex checks if there is a '//' *before* a
            # question mark.
            elif '//' in redirect_to and re.match(r'[^\?]*//', redirect_to):
                redirect_to = settings.LOGIN_REDIRECT_URL

            if not form.cleaned_data.get('remember_me'):
                request.session.set_expiry(0)

            # Okay, security checks complete. Log the user in.
            auth_login(request, form.get_user())

            if request.session.test_cookie_worked():
                request.session.delete_test_cookie()

            return HttpResponseRedirect(redirect_to)

    else:
        form = authentication_form(request)

    request.session.set_test_cookie()

    current_site = get_current_site(request)

    return render(template_name, {
        'form': form,
        redirect_field_name: redirect_to,
        'site': current_site,
        'site_name': current_site.name,
    }, context_instance=RequestContext(request))


def GeneratePdf(request):
    com_id=request.GET.get('complain_id')
    com=Complain.objects.get(id=com_id)
    buffer = io.BytesIO()
    # Create the PDF object, using the buffer as its "file."
    c = canvas.Canvas(buffer,pagesize=portrait(A4))
    # Draw things on the PDF. Here's where the PDF generation happens.
    # See the ReportLab documentation for the full list of functionality.
    c.rect(20, 50, 550, 750)
    c.drawString(345, 780, "Date, Time: "+str(com.DateTime.strftime('%b. %d, %Y, %I:%M %p')))
    c.drawString(35, 765, "User Id/Document Number: "+com.User_ID.username)
    c.drawString(35, 750, "Full Name: "+str(com.User_ID.first_name)+' '+str(com.User_ID.last_name))
    c.drawString(35, 735, "Department: "+com.Department)
    c.drawString(35, 720, "Subject: "+com.Subject)

    message_style = paragraph.ParagraphStyle('Normal')
    # message = com.Subject.replace('\n', '<br />')
    # message = paragraph.Paragraph(message, style=message_style)
    # w, h = message.wrap(100, 100)
    # message.drawOn(c, 40, 565 - h)

    c.drawString(35, 705, "Body: ")
    message = com.Body.replace('\n', '<br />')
    message = paragraph.Paragraph(message, style=message_style)
    w, h = message.wrap(490, 540)
    message.drawOn(c, 50, 690 - h)
    c.rect(45, 150,500 , 550)

    # phon = "Phone Number: " + str(data[5])
    # c.drawString(35, 550, phon)
    # add = "Address: " + str(data[6])
    # c.drawString(35, 535, add)
    # c.drawString(35, 520, "Province: " + str(data[10]))
    # c.drawString(35, 505, "Remark: " + str(data[9]))
    # c.drawString(35, 490, "Vote Status: " + str(data[14]))
    # Close the PDF object cleanly, and we're done.
    c.showPage()
    c.save()
    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.
    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename=str(com.User_ID)+".pdf")

def email_complain(request):
        # print('dbhh')
        com_id=request.GET.get('complain_id')
        com = Complain.objects.get(id=com_id)
        user_id=com.User_ID.username
        full_name=com.User_ID.first_name+' '+com.User_ID.last_name
        sub=com.Subject
        bdy=com.Body
        dt=com.DateTime.strftime('%b. %d, %Y, %I:%M %p')
        cont=[user_id,full_name,sub,bdy,dt]
        # cont=dumps(cont)
        return JsonResponse(cont,safe=False)

def Data_Collection_For_Dashboard(request):
    com_id = request.GET.get('complain_id')
    print('id',com_id)
    com = Complain.objects.get(id=com_id)
    user_id = request.user
    if(request.user.id==com.User_ID.id):
        ntfs=Notifications.objects.get(User_ID=user_id)
        ntfs=eval(ntfs.New_Notifications)
        # print(com,ntfs)
        totl_new_replies = 0
        totl_new_re_rep = 0
        totl_new_view = 0
        totl_new_share = 0
        totl_new_report = 0
        for ntf in ntfs:
            # print(ntf)
            if ntf[0]=='new_replies':
                totl_new_replies=totl_new_replies+1

            if ntf[0]=='new_re_replies':
                totl_new_re_rep=totl_new_re_rep+1

            if ntf[0]=='new_complain_view':
                totl_new_view=totl_new_view+1

            if ntf[0]=='new_complain_shared':
                totl_new_share=ntf[5]

            if ntf[0]=='new_complain_reported':
                totl_new_report=ntf[5]
        lst=[totl_new_replies,totl_new_re_rep,totl_new_view,totl_new_share,totl_new_report]
    return JsonResponse(lst,safe=False)

@login_required(login_url='login')
def increase_com_view(request):
    c_id=request.GET.get('complain_id')
    com=Complain.objects.get(id=c_id)
    # com.Seen_By=str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p'))
    up_now=eval(com.Seen_By)
    # if request.user.username in up_now:
    #     # print("fg")
    #     pass
    # else:
    up_now[request.user.username]=(str(request.user.get_full_name())+": "+
                  str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')))
    com.Seen_By=up_now
    com.save()
    Complain.refresh_from_db(com)
    ntfs=Notifications.objects.get(User_ID=com.User_ID)
    uptonow=eval(ntfs.New_Notifications)

    for lst  in uptonow:
        if str(lst[0])=='new_complain_view' and str(lst[3])==str(request.user.id) and str(lst[1])==str(c_id):
            # print(uptonow)
            return HttpResponse(request.GET.get('complain_id'))

    uptonow.append(['new_complain_view',c_id,'unseen',request.user.id,str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')),len(up_now)])
    ntfs.New_Notifications=uptonow
    ntfs.save()
    # print(Complain.objects.get(id=c_id).Seen_By)
    return HttpResponse(request.GET.get('complain_id'))

@login_required(login_url='login')
def increase_shared_view(request):
    c_id=request.GET.get('complain_id')
    com=Complain.objects.get(id=c_id)
    # com.Seen_By=str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p'))
    up_now=eval(com.Shares)
    up_now[request.user.username]=(str(request.user.get_full_name())+": "+
                  str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')))
    com.Shares=up_now
    com.save()
    Complain.refresh_from_db(com)
    ntfs = Notifications.objects.all()
    for ntf in ntfs:
        uptonow = eval(ntf.New_Notifications)
        uptonow.append(['new_complain_shared', c_id, 'unseen',request.user.id,str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')),len(up_now)])
        ntf.New_Notifications = uptonow
        ntf.save()
    # print(Complain.objects.get(id=c_id).Seen_By)
    return HttpResponse(request.GET.get('complain_id'))

@login_required(login_url='login')
def increase_reported_view(request):
    c_id=request.GET.get('complain_id')
    com=Complain.objects.get(id=c_id)
    # com.Seen_By=str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p'))
    up_now=eval(com.Reports)
    # if request.user.username in up_now:
    #     pass
    # else:
    up_now[request.user.username]=(str(request.user.get_full_name())+": "+
                  str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')))
    com.Reports=up_now
    com.save()
    Complain.refresh_from_db(com)
    ntfs = Notifications.objects.all()
    flg=''
    for ntf in ntfs:
        uptonow = eval(ntf.New_Notifications)

        for  indx,lst in enumerate(uptonow):
            if str(lst[0]) == 'new_complain_reported' and str(lst[3]) == str(request.user.id) and str(lst[1]) == str(c_id):
                uptonow[indx]=(['new_complain_reported', c_id, 'unseen', request.user.id,
                                str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')), lst[5]+1])
                flg='found'
        if flg=='found':
            ntf.New_Notifications = uptonow
            ntf.save()
            Notifications.refresh_from_db(ntf)
        else:
            uptonow.append(['new_complain_reported', c_id, 'unseen', request.user.id,
                            str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')), len(up_now)])
            ntf.New_Notifications = uptonow
            ntf.save()
            Notifications.refresh_from_db(ntf)
    # print(Complain.objects.get(id=c_id).Seen_By)
    return HttpResponse(request.GET.get('complain_id'))

@login_required(login_url='login')
def increase_replied_view(request):
    c_id=request.GET.get('complain_id')
    com=Complain.objects.get(id=c_id)
    # com.Seen_By=str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p'))
    up_now=eval(com.Replies)
    # print("this after")
    # print(up_now)
    up_now[request.user.username]=(str(request.user.get_full_name())+": "+
                  str(datetime.datetime.now().strftime('%b. %d, %Y, %I:%M %p')))
    com.Replies=up_now
    com.save()
    Complain.refresh_from_db(com)
    # print(Complain.objects.get(id=c_id).Seen_By)
    return HttpResponse('done '+request.GET.get('complain_id'))

@login_required(login_url='login')
def reply_to_comment(request):
    today=datetime.datetime.now().strftime("%B %d, %Y")
    return render(request,'mainsite/reply.html',{'today':today,'user':request.user,
                                                 'comment_id':request.GET.get('comment_id')})

@login_required(login_url='login')
def reply_to_comment_staff(request):
    today=datetime.datetime.now().strftime("%B %d, %Y")
    return render(request,'mainsite/reply_staff.html',{'today':today,'user':request.user,
                                                 'comment_id':request.GET.get('comment_id')})



@login_required(login_url='login')
def Save_Comment_Replies(request):
    # print(request.POST)
    user=request.user
    c_id = request.POST.get('comment_id')
    c_id=Complain.objects.get(id=c_id)
    bdy = request.POST.get('bdy')
    attch=request.FILES
    try:
        attch=request.FILES['attch']
    except:
        attch=None
    print(attch, user)
    rep=Replies(Replied_By=user,Complain_ID=c_id,Body=bdy,Attachments=attch)
    rep.save_with_notification_update()
    Replies.refresh_from_db(rep)
    print(rep.id)
    if str(request.user.username)==str(c_id.User_ID.username):
        # print("done")
        contex = {'complain': c_id}
        return render(request, 'mainsite/viewcomplain.html', contex)
    else:
        contex = {'complain': c_id}
        return render(request, 'mainsite/view_complain_staff.html', contex)



@login_required(login_url='login')
def Save_Re_Replies(request):
    # print("Hhd",request.POST)
    # print("Hhd", request.FILES)
    user=request.user
    re_id = request.POST.get('re_reply_id')
    re_id=Replies.objects.get(id=re_id)
    bdy = request.POST.get('bdy')
    attch=request.FILES
    try:
        attch=request.FILES['attch']
    except:
        attch=None
    print(attch, user)
    re_rep=Re_Replies(Replies_ID=re_id,Complain_ID=re_id.Complain_ID,Body=bdy,Attachments=attch,Replied_By=user)
    re_rep.save()
    Replies.refresh_from_db(re_rep)
    # if str(request.user.username)==str(c_id.User_ID.username):
    #     # print("done")
    #     contex = {'complain': c_id}
    #     return render(request, 'mainsite/viewcomplain.html', contex)
    # else:
    #     contex = {'complain': c_id}
    #     return render(request, 'mainsite/view_complain_staff.html', contex)

    return HttpResponse('done')

@login_required(login_url='login')
def Update_Notice_Seen_Status(request):
    ntfs=Notifications.objects.get(User_ID=request.user)
    lst=eval(ntfs.New_Notifications)
    indx=int(request.GET.get('index'))
    # print(indx)
    # print(lst[indx])
    lst[indx][2]='seen'
    ntfs.New_Notifications=str(lst)
    ntfs.save()
    return HttpResponse('done')