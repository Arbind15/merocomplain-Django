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

def dashboard(request):

    return render(request,'mainsite/Dashboard.html')

def myComplain(request):

    return render(request,'mainsite/mycomplain.html')

def report(request):

    return render(request,'mainsite/report.html')

def faq(request):

    return render(request,'mainsite/faq.html')

def newComplain(request):

    return render(request,'mainsite/newcomplain.html')