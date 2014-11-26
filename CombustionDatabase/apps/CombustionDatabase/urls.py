#!/usr/bin/env python
# -*- coding: utf-8 -*-
# pantianxiang@gmail.com 2014-11-26 02:21:21


from django.conf.urls import patterns, url 

urlpatterns = patterns('',
	url(r'^get/(?P<type>\d{4})/(?P<id>[a-z0-9]+)', 'apps.CombustionDatabase.views.get'),
	url(r'^combustion/update/(?P<type>\d{4})/(?P<id>[a-z0-9]+)', 'views.update'),
	url(r'^combustion/insert/(?P<type>\d{4})', 'views.insert'),
	url(r'^combustion/delete/(?P<type>\d{4})/(?P<id>[a-z0-9]+)', 'views.delete'),
)
