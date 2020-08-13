import datetime, time
from django import template

register = template.Library()

@register.tag(name='eval')
def do_eval(parser, token):
    "Usage: {% eval %}1 + 1{% endeval %}"

    nodelist = parser.parse(('endeval',))
    print(parser,token)

    class EvalNode(template.Node):
        def render(self, context):
            return eval(nodelist.render(context))
    parser.delete_first_token()
    return EvalNode()

from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()

@register.filter
@stringfilter
def evalutae(value):
    # print((value))
    return eval(value)

@register.filter
def get_dict_value(dictionary):
    # print(dictionary)
    return dictionary.values()

@register.filter
def get_lenght(obj):
    # print(len(obj))
    return str(len(obj))


@register.filter
def get_time_difference(pre_time):
    pre_time=pre_time.replace(tzinfo=None)
    # print(type(pre_time))
    now=datetime.datetime.now()
    # time.sleep(5)
    # now2=datetime.datetime.now()
    diff=now-pre_time
    # print(diff.seconds)
    diff=float(diff.seconds)
    if(diff<60):
        if int(diff)<=1:
            obj='a second ago'
        else:
            obj=str(int(diff))+' seconds ago'
        return obj

    if (diff / 60)>0 and (diff/60)<60:
        if int(diff/60)<=1:
            obj = 'a minute ago'
        else:
            obj=str(int(diff/60))+' minutes ago'
        return obj

    if(diff/3600)>0 and (diff/3600)<24:
        if int(diff/3600)<=1:
            obj = 'an hour ago'
        else:
            obj = str(int(diff/3600))+ ' hours ago'
        return obj

    if (diff / 86400)>0 and (diff/86400)<7:
        if int(diff / 86400)<=1:
            obj = 'a day ago'
        else:
            obj = str(int(diff / 86400)) + ' days ago'
        return obj

    if (diff / 604800) >0 :
        if int(diff / 604800)<=1:
            obj = 'a week ago'
        else:
            obj = str(int(diff / 604800)) + ' weeks ago'
        return obj

    # return str(len(obj))

# print(get_time_difference(500000))

@register.filter
@stringfilter
def get_time_difference_from_string(pre_time):
    print(pre_time)
    pre_time=datetime.datetime.strptime(pre_time, '%b. %d, %Y, %I:%M %p')
    pre_time=pre_time.replace(tzinfo=None)
    # print(type(pre_time))
    now=datetime.datetime.now()
    # time.sleep(5)
    # now2=datetime.datetime.now()
    diff=now-pre_time
    # print(diff.seconds)
    diff=float(diff.seconds)
    if(diff<60):
        if int(diff)<=1:
            obj='a second ago'
        else:
            obj=str(int(diff))+' seconds ago'
        return obj

    if (diff / 60)>0 and (diff/60)<60:
        if int(diff/60)<=1:
            obj = 'a minute ago'
        else:
            obj=str(int(diff/60))+' minutes ago'
        return obj

    if(diff/3600)>0 and (diff/3600)<24:
        if int(diff/3600)<=1:
            obj = 'an hour ago'
        else:
            obj = str(int(diff/3600))+ ' hours ago'
        return obj

    if (diff / 86400)>0 and (diff/86400)<7:
        if int(diff / 86400)<=1:
            obj = 'a day ago'
        else:
            obj = str(int(diff / 86400)) + ' days ago'
        return obj

    if (diff / 604800) >0 :
        if int(diff / 604800)<=1:
            obj = 'a week ago'
        else:
            obj = str(int(diff / 604800)) + ' weeks ago'
        return obj
