# Generated by Django 3.0.8 on 2020-08-12 10:45

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
        ('mainsite', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notifications',
            fields=[
                ('User_ID', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL, verbose_name='User_ID')),
                ('New_User', models.TextField(default='[]')),
                ('New_Complain', models.TextField(default='[]')),
                ('New_Replies', models.TextField(default='[]')),
                ('New_Re_Replies', models.TextField(default='[]')),
                ('Remarks', models.TextField(default='None')),
            ],
        ),
        migrations.AlterField(
            model_name='complain',
            name='DateTime',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 12, 16, 30, 42, 7115)),
        ),
        migrations.AlterField(
            model_name='re_replies',
            name='DateTime',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 12, 16, 30, 42, 8086)),
        ),
        migrations.AlterField(
            model_name='replies',
            name='DateTime',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 12, 16, 30, 42, 8086)),
        ),
    ]
