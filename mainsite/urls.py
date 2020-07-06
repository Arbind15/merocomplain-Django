from django.urls import path

from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.home, name='home'),
    path('signup/', views.signup, name='signup'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('mycomplain/', views.myComplain, name='mycomplain'),
    path('report/', views.report, name='report'),
    path('faq/', views.faq, name='faq'),
    path('login/', views.login, name='login')

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)