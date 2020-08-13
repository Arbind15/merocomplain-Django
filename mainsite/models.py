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

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        nts = Notifications(User_ID=self.User_ID)
        nts.save()
        usrs = User.objects.all()
        for usr in usrs:
            ntfs = Notifications.objects.get(User_ID=usr)
            tmp = eval(ntfs.New_Notifications)
            tmp.append(['new_user', self.User_ID.id,'unseen'])
            ntfs.New_Notifications = tmp
            ntfs.save()


class Complain(models.Model):
    # Complain_ID=models.
    User_ID = models.ForeignKey(User, on_delete=models.CASCADE)
    DateTime=models.DateTimeField(default=datetime.datetime.now())
    Department=models.CharField(max_length=500)
    Subject=models.TextField()
    Body=models.TextField()
    Attachments=models.FileField(upload_to="User_Data")
    Priority=models.CharField(max_length=50)
    # Seen_Status=models.CharField(max_length=50,default="Unseen")
    # Seen_Date=models.CharField(max_length=50,default="Unseen")
    Seen_By=models.TextField(default='{}')
    Shares=models.TextField(default='{}')
    Reports=models.TextField(default='{}')
    Replies=models.TextField(default='{}')
    Status=models.CharField(max_length=100,default="Unseen")
    Remarks = models.CharField(max_length=100, default="")
    def __str__(self):
        return f'{self.User_ID.first_name} -Complain'

    def save_with_notification_update(self,*args,**kwargs):
        super().save(*args, **kwargs)
        usrs = User.objects.all()
        for usr in usrs:
            ntfs = Notifications.objects.get(User_ID=usr)
            tmp = eval(ntfs.New_Notifications)
            tmp.append(['new_complain', self.id, 'unseen'])
            ntfs.New_Notifications = tmp
            ntfs.save()

    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)



class Replies(models.Model):
    # Complain_ID=models.
    Complain_ID = models.ForeignKey(Complain, on_delete=models.CASCADE)
    Replied_By = models.ForeignKey(User, on_delete=models.CASCADE)
    DateTime=models.DateTimeField(default=datetime.datetime.now())
    Body=models.TextField()
    Attachments=models.FileField(upload_to="User_Data")
    # Seen_Status=models.CharField(max_length=50,default="Unseen")
    # Seen_Date=models.CharField(max_length=50,default="Unseen")
    Remarks=models.CharField(max_length=100,default='')
    Status=models.CharField(max_length=100,default='Unseen')
    def __str__(self):
        return f'{self.Complain_ID} -Replies'

    def save_with_notification_update(self,*args,**kwargs):
        super().save(*args, **kwargs)
        usrs = User.objects.all()
        for usr in usrs:
            ntfs = Notifications.objects.get(User_ID=usr)
            tmp = eval(ntfs.New_Notifications)
            tmp.append(['new_replies', self.id, 'unseen'])
            ntfs.New_Notifications = tmp
            ntfs.save()

    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)


class Re_Replies(models.Model):
    # Complain_ID=models.
    Complain_ID=models.ForeignKey(Complain, on_delete=models.CASCADE)
    Replies_ID = models.ForeignKey(Replies, on_delete=models.CASCADE)
    DateTime=models.DateTimeField(default=datetime.datetime.now())
    Replied_By=models.ForeignKey(User,on_delete=models.CASCADE)
    Body=models.TextField()
    Attachments=models.FileField(upload_to="User_Data")
    # Seen_Status=models.CharField(max_length=50,default="Unseen")
    # Seen_Date=models.CharField(max_length=50,default="Unseen")
    Remarks=models.CharField(max_length=100,default='')
    Status=models.CharField(max_length=100,default='Unseen')
    def __str__(self):
        return f'{self.Replies_ID} -Re_Replies'

    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        usrs = User.objects.all()
        for usr in usrs:
            ntfs=Notifications.objects.get(User_ID=usr)
            tmp=eval(ntfs.New_Notifications)
            tmp.append(['new_re_replies',self.id,'unseen'])
            ntfs.New_Notifications=tmp
            ntfs.save()

class Notifications(models.Model):
    User_ID=models.OneToOneField(User,on_delete=models.CASCADE,verbose_name='User_ID',primary_key=True)
    New_Notifications=models.TextField(default='[]')
    # New_Complain=models.TextField(default='[]')
    # New_Replies=models.TextField(default='[]')
    # New_Re_Replies=models.TextField(default='[]')
    Remarks=models.TextField(default="None")
    def __str__(self):
        return f'{self.User_ID} -Notification'