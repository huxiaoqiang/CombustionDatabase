#-*- coding: UTF-8 -*-

from models import *
from django.contrib import auth
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import simplejson
import MySQLdb
import sys

@csrf_exempt
def register(request):
    re = dict()
    if request.method =="POST":
        req = simplejson.loads(request.raw_post_data)
        username = req['username']
        password = req['password']
        #email = request.post.get('email','')
        if username == '':
            re['error'] = {'code':'106','errorMsg':'please enter the username'}
        elif username.isdigit():
            re['error'] = {'code':106,'erroeMsg':'the username need one letter at least'}
        elif len(password) < 6 or len(password) > 20:
            re['error'] = {'code':110,'errorMsg':'length of password is illegal'}
        else:
            try:
                User.objects.create_user(username=username,password=password)
                userinfo = userInfo(username=username)
                #userinfo.email = email
                re['username'] = username
                user = auth.authenticate(username=username,password=password)
                if user is not None and user.is_active:
                    auth.login(request,user)
                    re['error'] = {'code':1,'errorMsg':'login succeed'}
                    resp = HttpResponse(json.dumps(re), content_type = 'application/json')
                    resp.set_cookie('username', username)
                    userinfo.save()
                    return resp
                else:
                    re['error'] =  {'code':104,'errorMsg':'regist fails'}
            except:
                re['error'] = {'code':107,'errorMsg':'username exists!'}
    else:
        re['error'] = {'code':2,'errorMsg':'error,need POST'}
    return HttpResponse(json.dumps(re), content_type = 'application/json')

@csrf_exempt
def login(request):
    re = dict()
    if request.method == "POST":
        req = simplejson.loads(request.raw_post_data)
        username = req['username']
        password = req['password']
        user = auth.authenticate(username=username, password=password)
        re['username'] = username
        if user is not None and user.is_active:
            # Correct password, and the user is marked "active"
            auth.login(request, user)
            re['error'] = {'code':1,'errorMsg':'login succeed'}
            # Redirect to a success page.
            resp = HttpResponse(json.dumps(re), content_type = 'application/json')
            resp.set_cookie('username', username)
            return resp
        else:
            # Show an error page
           re['error'] = {'code':101,'errorMsg': 'username or password error'}
    else:
        re['error'] = {'code':2,'errorMsg': 'error,need POST'}
    return HttpResponse(json.dumps(re), content_type = 'application/json')
