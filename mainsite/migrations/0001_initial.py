# Generated by Django 3.0.8 on 2020-08-11 15:28

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Complain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DateTime', models.DateTimeField(default=datetime.datetime(2020, 8, 11, 21, 13, 13, 700957))),
                ('Department', models.CharField(max_length=500)),
                ('Subject', models.TextField()),
                ('Body', models.TextField()),
                ('Attachments', models.FileField(upload_to='User_Data')),
                ('Priority', models.CharField(max_length=50)),
                ('Seen_By', models.TextField(default='{}')),
                ('Shares', models.TextField(default='{}')),
                ('Reports', models.TextField(default='{}')),
                ('Replies', models.TextField(default='{}')),
                ('Status', models.CharField(default='Unseen', max_length=100)),
                ('Remarks', models.CharField(default='', max_length=100)),
                ('User_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('Status', models.CharField(default='User', max_length=50)),
                ('User_ID', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL, verbose_name='User_ID')),
                ('Phone_Number', models.CharField(max_length=14)),
                ('Date_of_Birth', models.DateField()),
                ('Gender', models.CharField(max_length=10)),
                ('Address', models.CharField(max_length=500)),
                ('Postal_Code', models.CharField(max_length=10)),
                ('Document_Type', models.CharField(max_length=50)),
                ('Document_Number', models.CharField(max_length=50)),
                ('Document_Front', models.ImageField(upload_to='')),
                ('Document_Rare', models.ImageField(upload_to='')),
                ('Profile_Picture', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Replies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DateTime', models.DateTimeField(default=datetime.datetime(2020, 8, 11, 21, 13, 13, 700957))),
                ('Body', models.TextField()),
                ('Attachments', models.FileField(upload_to='User_Data')),
                ('Remarks', models.CharField(default='', max_length=100)),
                ('Status', models.CharField(default='Unseen', max_length=100)),
                ('Complain_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainsite.Complain')),
                ('Replied_By', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Re_Replies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DateTime', models.DateTimeField(default=datetime.datetime(2020, 8, 11, 21, 13, 13, 701956))),
                ('Body', models.TextField()),
                ('Attachments', models.FileField(upload_to='User_Data')),
                ('Remarks', models.CharField(default='', max_length=100)),
                ('Status', models.CharField(default='Unseen', max_length=100)),
                ('Complain_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainsite.Complain')),
                ('Replied_By', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('Replies_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainsite.Replies')),
            ],
        ),
    ]
