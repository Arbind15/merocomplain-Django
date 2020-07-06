from django.urls import path

from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # path('', views.login, name='login'),

    path('', views.dashboard, name='dashboard'),
    path('signup/', views.signup, name='signup'),
    path('dashboard/', views.dashboard, name='dashboard')

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)