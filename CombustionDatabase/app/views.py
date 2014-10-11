# Create your views here.
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.template import Context,Template
from django.template.loader import get_template
from CombustionDatabase.settings import STATICFILES_DIRS
import os
def index(request):
    t = get_template('index.html')
    c = Context()
    html = t.render(c)
    return HttpResponse(html)
