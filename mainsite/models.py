from django.db import models
from django.db import models
import sqlite3,time,datetime
from django.contrib.auth.models import User
from PIL import Image




class Profile(models.Model):
    Status = models.CharField(max_length=50, default="User")
    User_ID =models.OneToOneField(User,on_delete=models.CASCADE,verbose_name='User_ID',primary_key=True)
    Phone_Number=models.CharField(max_length=14)
    Date_of_Birth=models.DateField()
    Gender=models.CharField(max_length=10)
    Address=models.CharField(max_length=500)
    Postal_Code=models.CharField(max_length=10)
    Document_Type=models.CharField(max_length=50)
    Document_Number=models.CharField(max_length=50)
    Document_Front=models.ImageField()
    Document_Rare=models.ImageField()
    Profile_Picture=models.ImageField()
    # Profile_Picture=models.ImageField(default='default.png',upload_to='user_pics')
    def __str__(self):
        return f'{self.User_ID.first_name} -Profile'

    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        img1=Image.open(self.Profile_Picture.path)
        img1.thumbnail((200,200))
        img1.save(self.Profile_Picture.path)


class Complain(models.Model):
    # Complain_ID=models.
    User_ID = models.ForeignKey(User, on_delete=models.CASCADE)
    DateTime=models.DateTimeField(default=datetime.datetime.now())
    Department=models.CharField(max_length=500)
    Subject=models.TextField()
    Body=models.TextField()
    Attachments=models.FileField(upload_to="User_Data")
    Priority=models.CharField(max_length=50)
    Seen_Status=models.CharField(max_length=50,default="Unseen")
    Seen_Date=models.CharField(max_length=50,default="Unseen")
    Seen_By=models.CharField(max_length=100,default="Unseen")
    Replies=models.CharField(max_length=50,default="0")
    def __str__(self):
        return f'{self.User_ID.first_name} -Complain'
