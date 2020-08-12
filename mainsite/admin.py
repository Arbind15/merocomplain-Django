from django.contrib import admin
from .models import Profile,Complain,Replies,Re_Replies,Notifications
admin.site.register(Profile)
admin.site.register(Complain)
admin.site.register(Replies)
admin.site.register(Re_Replies)
admin.site.register(Notifications)