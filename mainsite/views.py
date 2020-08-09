from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render,redirect
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
from .models import Profile,Complain
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
    return render(request,'mainsite/home.html',contex)

def login(request):
    print(request)
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

def dashboard(request):

    return render(request,'mainsite/Dashboard.html')

@login_required(login_url='login')
def myComplain(request):
    coms=Complain.objects.all()
    # for x in coms:
    #     print(x)
    contex={'complain':coms}
    return render(request,'mainsite/mycomplain.html',contex)
@login_required(login_url='login')
def complains(request):
    coms = Complain.objects.all()
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
    contex = {'complain': complain}
    return render(request, 'mainsite/viewcomplain.html', contex)

@login_required(login_url='login')
def SaveComplain(request):
    print(request.POST)
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
    com.save()
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