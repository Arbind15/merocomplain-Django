#
# from django import template
#
# register = template.Library()
#
# @register.tag(name='eval')
# def do_eval(parser, token):
#     "Usage: {% eval %}1 + 1{% endeval %}"
#
#     nodelist = parser.parse(('endeval',))
#     print(parser,token)
#
#     class EvalNode(template.Node):
#         def render(self, context):
#             return eval(nodelist.render(context))
#     parser.delete_first_token()
#     return EvalNode()

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