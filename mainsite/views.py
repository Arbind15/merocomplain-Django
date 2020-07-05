from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
import csv, json, itertools, re
import os
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings


def home(request):

    return render(request,'mainsite/home.html')

def login(request):

    return render(request,'mainsite/login.html')

def signup(request):

    return render(request,'mainsite/Signup.html')