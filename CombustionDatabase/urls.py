from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin

import apps.CombustionDatabase

admin.autodiscover()


urlpatterns = patterns('',
    url(r'^admin/',include(admin.site.urls)),
    url(r'^combustion/',include('apps.CombustionDatabase.urls')),
    #User
	url(r'^api/user/regist$', 'apps.CombustionDatabase.user.register'),
    url(r'^api/user/login$', 'apps.CombustionDatabase.user.login'),
    url(r'^api/user/userinfo/get$','apps.CombustionDatabase.user.get_userinfo'),
   	url(r'^$', 'apps.CombustionDatabase.views.index'),
    url(r'^api/user/logout$','apps.CombustionDatabase.user.logout'),
)
urlpatterns+=static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
