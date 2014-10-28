# Create your views here.
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.template import Context,Template
from django.template.loader import get_template
import os
import sys
import json

sys.path.append("../..")
#from settings import STATICFILES_DIRS


def index(request):
    t = get_template('index.html')
    c = Context()
    html = t.render(c)
    return HttpResponse(html)

def get(request, type ,id):
	response_data = {}  
	response_data['result'] = 'failed'  
	response_data['message'] = 'You messed up' 
	return HttpResponse(json.dumps(response_data), content_type="application/json")

def insert(request, type, id):
	pass

def update(request, type, id):
	pass

def delete(request, type, id):
	pass
