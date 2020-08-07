from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from .models import Profile

from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.utils.translation import ugettext_lazy as _

class UserCreationForm(UserCreationForm):
    email=forms.EmailField()
    Full_Name=forms.CharField()
    class Meta:
        model=User
        fields = UserCreationForm.Meta.fields + ( 'email','first_name')

class UserProfileForm(forms.ModelForm):
    class Meta:
        model=Profile
        fields = ('Status','User_ID','Phone_Number','Date_of_Birth','Gender','Address','Postal_Code','Document_Type',
                  'Document_Number','Document_Front','Document_Rare','Profile_Picture')


class AuthenticationRememberMeForm(AuthenticationForm):
    """
    Subclass of Django ``AuthenticationForm`` which adds a remember me
    checkbox.

    """

    remember_me = forms.BooleanField(label=_('Remember Me'), initial=False,
                                     required=False)