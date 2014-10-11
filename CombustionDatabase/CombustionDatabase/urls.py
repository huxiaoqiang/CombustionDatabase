from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',

    url(r'^admin/',include(admin.site.urls)),
    url(r'^$','app.views.index'),
)
urlpatterns+=static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)