from django.urls import path

from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.login, name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='mainsite/login.html'), name='logout'),
    path('home/', views.home, name='home'),
    path('profile/', views.profile, name='profile'),
    path('Count_Unseen_Notifications/', views.Count_Unseen_Notifications, name='Count_Unseen_Notifications'),
    path('Data_Collection_For_Dashboard/', views.Data_Collection_For_Dashboard, name='Data_Collection_For_Dashboard'),
    path('signup/', views.signup, name='signup'),
    path('email_validate/', views.email_validate, name='email_validate'),
    path('user_validate/', views.user_validate, name='user_validate'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('mycomplain/', views.myComplain, name='mycomplain'),
    path('viewcomplain/', views.viewcomplain, name='viewcomplain'),
    path('viewnotices/', views.viewnotices, name='viewnotices'),
    path('report/', views.report, name='report'),
    path('staff/', views.staff, name='staff'),
    path('complains/', views.complains, name='complains'),
    path('viewcomplainstaff/', views.viewcomplainstaff, name='viewcomplainstaff'),
    path('Save_Comment_Replies/', views.Save_Comment_Replies, name='Save_Comment_Replies'),
    path('pdf_generator/', views.GeneratePdf, name='GeneratePdf'),
    path('email_complain/', views.email_complain, name='email_complain'),
    path('reply_to_comment/', views.reply_to_comment, name='reply_to_comment'),
    path('reply_to_comment_staff/', views.reply_to_comment_staff, name='reply_to_comment_staff'),
    path('Save_Re_Replies/', views.Save_Re_Replies, name='Save_Re_Replies'),
    path('increase_com_view/', views.increase_com_view, name='increase_com_view'),
    path('increase_shared_view/', views.increase_shared_view, name='increase_shared_view'),
    path('increase_reported_view/', views.increase_reported_view, name='increase_reported_view'),
    path('increase_replied_view/', views.increase_replied_view, name='increase_replied_view'),
    path('Update_Notice_Seen_Status/', views.Update_Notice_Seen_Status, name='Update_Notice_Seen_Status'),
    path('administrator/', views.administrator, name='administrator'),
    path('users_admin/', views.Users_Admin, name='users_admin'),
    path('faq/', views.faq, name='faq'),
    path('login/', views.login, name='login'),
    path('newcomplain/', views.newComplain, name='newcomplain'),
    path('SaveUser/', views.SaveUser, name='SaveUser'),
    path('SaveComplain/', views.SaveComplain, name='SaveComplain'),
    path('activate/<uidb64>/<token>/',views.ActivateAccount.as_view(),name='activate'),
    # path('verification/',views.verification,name='verification'),
    # path('activation_fails/',views.activation_fails,name='activation_fails'),
    path('password_reset/',
           auth_views.PasswordResetView.as_view(template_name='mainsite/password_reset_request.html'),
           name='password_reset_request'),
    path('password_reset_done/',
           auth_views.PasswordResetCompleteView.as_view(template_name='mainsite/password_reset_done.html'),
           name='password_reset_done'),
    path('password_reset_confirm/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(
          template_name='mainsite/password_reset_confirm.html'), name='password_reset_confirm'),
    path('password_reset_complete/', auth_views.PasswordResetCompleteView.as_view(
          template_name='mainsite/password_reset_complete.html'), name='password_reset_complete')

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
