# Generated by Django 3.0.8 on 2020-08-10 08:23

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0002_auto_20200807_2052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='complain',
            name='DateTime',
            field=models.DateTimeField(default=datetime.datetime(2020, 8, 10, 14, 8, 39, 441553)),
        ),
    ]
