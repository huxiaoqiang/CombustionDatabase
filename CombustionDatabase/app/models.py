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

class bibligraphy_attatchment(models.Model):
	primeID = models.OneToOneField(bibligraphy)
	content = models.FileField(upload_to='document/')
	name = models.CharField(max_length = 70)

class data_attribute(models.Model):
	primeID = models.CharField(max_length=9)
	preferredKey = models.CharField(max_length=30)
	origin = models.CharField(max_length=9)
	originXML = models.TextField()

class data_attribute_additionaldataiteitem(models.Model):
	primeID = models.OneToOneField(data_attribute)
	description = models.CharField(max_length=40)
	content = models.TextField()

class data_attribute_attatchment(models.Model):
	primeID = models.OneToOneField(data_attribute)
	content = models.FileField(upload_to='document/')
	name = models.CharField(max_length=70)

class data_attribute_property(models.Model):
	primeID = models.OneToOneField(data_attribute)
	expID = models.CharField(max_length = 9)
	dataGroupID = models.CharField(max_length=5)
	propertyID = models.CharField(max_length=4)
