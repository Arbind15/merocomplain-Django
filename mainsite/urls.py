from django.urls import path

from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.login, name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='mainsite/login.html'), name='logout'),
    path('home/', views.home, name='home'),
    path('signup/', views.signup, name='signup'),
    path('email_validate/', views.email_validate, name='email_validate'),
    path('user_validate/', views.user_validate, name='user_validate'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('mycomplain/', views.myComplain, name='mycomplain'),
    path('viewcomplain/', views.viewcomplain, name='viewcomplain'),
    path('report/', views.report, name='report'),
    path('staff/', views.staff, name='staff'),
    path('complains/', views.complains, name='complains'),
    path('viewcomplainstaff/', views.viewcomplainstaff, name='viewcomplainstaff'),
    path('pdf_generator/', views.GeneratePdf, name='GeneratePdf'),
    path('email_complain/', views.email_complain, name='email_complain'),
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
