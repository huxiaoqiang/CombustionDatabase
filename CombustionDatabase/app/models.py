from django.db import models


class User(models.Model):
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=32)
    mail = models.EmailField()

class bibligraphy(models.Model):
	primeID = models.CharField(max_length=9)
	originXML = models.TextField()
	title = models.TextField()
	author = models.CharField(max_length=50)
	year = models.IntegerField()
	preferredKey = models.CharField(max_length = 50)
	page = models.CharField(max_length = 20)

#class bibligraphy_attatchment(models.Model):
