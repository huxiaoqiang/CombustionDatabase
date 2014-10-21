from django.db import models


class User(models.Model):
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=32)
    authority = models.IntegerField()
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

class dataset(models.Model):
	primeID = models.CharField(max_length = 9)
	modelID = models.CharField(max_length = 9)
	originXML = models.TextField()

class dataset_additionaldataitem(models.Model):
	primeID = models.OneToOneField(dataset)
	description = models.CharField(max_length = 60)
	content = models.TextField()

class dataset_attatchment(models.Model):
	primeID = models.OneToOneField(dataset)

class dataset_bib(models.Model):
	primeID = models.OneToOneField(dataset)
	bibID = models.CharField(max_length = 9)
	bibPreferredKey = models.CharField(max_length = 100)

class element(models.Model):
	primeID = models.CharField(max_length = 9)
	name = models.CharField(max_length = 10)
	originXML = models.TextField()
	number = models.DecimalField(max_digits = 3, decimal_places = 0)
	elementName = models.CharField(max_length = 20)
	elementSymbol = models.CharField(max_length = 3)

class element_attatchment(models.Model):
	primeID = models.OneToOneField(element)

class experiment(models.Model):
	primeID = models.CharField(max_length = 9)
	originXML = models.TextField()
	preferredKey = models.CharField(max_length = 50)
	apparatus_kind = models.CharField(max_length = 20)
	common_properties_name =  models.TextField()

class exp_additionaldataitem(models.Model):
	primeID = models.OneToOneField(experiment)
	description = models.CharField(max_length = 80)
	content = models.TextField()

class exp_apparatus(models.Model):
	primeID = models.OneToOneField(experiment)
	apparatus_property_description = models.CharField(max_length = 70)

class exp_attachment(models.Model):
	primeID = models.OneToOneField(experiment)
	content = models.FileField(upload_to='document/')
	name = models.CharField(max_length = 20)

class exp_bib(models.Model):
	primeID = models.OneToOneField(experiment)
	bibID = models.CharField(max_length = 9)
	bibPreferredKey =  models.CharField(max_length = 100)

class exp_component(models.Model):
	primeID = models.OneToOneField(experiment)
	componentID = models.CharField(max_length = 9)
	componentPreferredKey = models.CharField(max_length = 20)

class exp_datagroup_property(models.Model):
	primeID = models.OneToOneField(experiment)
	dgID = models.CharField(max_length = 30)
	name = models.CharField(max_length = 30)
	description = models.CharField(max_length = 100)
	propertyID = models.CharField(max_length = 4)

class instrumental_model(models.Model):
	primeID = models.CharField(max_length = 10)
	preferredKey = models.CharField(max_length = 100)
	originXML = models.TextField()

class instrumental_model_additionaldataitem(models.Model):
	primeID = models.OneToOneField(instrumental_model)
	description = models.CharField(max_length = 80)
	content = models.TextField()

class instrumental_model_attatchment(models.Model):
	primeID = models.OneToOneField(instrumental_model)

class instrumental_model_keyword(models.Model):
	primeID = models.OneToOneField(instrumental_model)
	keyword = models.CharField(max_length = 40)

class model(models.Model):
	primeID = models.CharField(max_length = 9)
	preferredKey = models.CharField(max_length = 30)
	originXML = models.TextField()

class model_additionaldataitem(models.Model):
	primeID = models.OneToOneField(model)
	description = models.CharField(max_length = 30)
	content = models.CharField(max_length = 100)

class model_attatchment(models.Model):
	primeID = models.OneToOneField(model)
	content = models.FileField(upload_to='document/')
	name = models.CharField(max_length = 30)

class model_bib(models.Model):
	primeID = models.OneToOneField(model)
	bibID = models.CharField(max_length = 9)
	bibPreferredKey = models.CharField(max_length = 50)

class model_reaction(models.Model):
	primeID = models.OneToOneField(model)
	reactionID = models.CharField(max_length = 9)
	reactionPreferredKey = models.CharField(max_length = 80)
	reactionRateID = models.CharField(max_length = 10)
	reactionRatePreferredKey = models.CharField(max_length = 80)

class model_species(models.Model):
	primeID = models.OneToOneField(model)
	speciesID = models.CharField(max_length = 9)
	speciesPreferredKey = models.CharField(max_length = 20)
	speciesThermoID = models.CharField(max_length = 11)
	speciesThermoPreferredKey = models.CharField(max_length = 15)

class reaction(models.Model):
	primeID = models.CharField(max_length = 9)
	canonicalForm = models.CharField(max_length = 80)
	originXML = models.TextField()

class reaction_additionaldataitem(models.Model):
	primeID = models.OneToOneField(reaction)

class reaction_attatchment(models.Model):
	primeID = models.OneToOneField(reaction)

class reaction_rate(models.Model):
	primeID = models.CharField(max_length = 10)
	reactionID = models.CharField(max_length = 9)
	originXML = models.TextField()
	rate_a = models.FloatField()
	rate_n = models.FloatField()
	rate_e = models.FloatField()
	preferredKey = models.CharField(max_length = 80)
	rate_enable = models.BooleanField()
	pressure_enable = models.BooleanField()
	pressure_a = models.FloatField()
	pressure_tx = models.FloatField()
	pressure_txx = models.FloatField()
	pressure_txxx = models.FloatField()

class reaction_rate_additionaldataitem(models.Model):
	primeID = models.OneToOneField(reaction_rate)
	reactionID = models.CharField(max_length = 9)
	description = models.CharField(max_length = 40)
	content = models.TextField()

class reaction_rate_attatchment(models.Model):
	primeID = models.OneToOneField(reaction_rate)

class reaction_rate_bib(models.Model):
	primeID = models.OneToOneField(reaction_rate)
	reactionID = models.CharField(max_length = 9)
	bibID = models.CharField(max_length = 9)
	bibPreferredKey = models.CharField(max_length = 30)

class reaction_reactant(models.Model):
	primeID = models.OneToOneField(reaction_rate)
	reactantID = models.CharField(max_length = 9)
	reactantPreferredKey = models.CharField(max_length = 20)

class species(models.Model):
	primeID = models.CharField(max_length=9)
	preferredKey = models.CharField(max_length = 20)
	originXML = models.TextField()
	name = models.TextField()
	CASRegistryNumber = models.CharField(max_length = 20)
	InChI = models.CharField(max_length = 100)
	formula = models.CharField(max_length = 20)

class species_attatchment(models.Model):
	primeID = models.OneToOneField(species)

class species_element(models.Model):
	primeID = models.OneToOneField(species)
	elementSymbol = models.CharField(max_length = 3)
	elementNum = models.IntegerField()

class optimization_variable(models.Model):
	primeID = models.CharField(max_length = 9)
	preferredKey = models.CharField(max_length=80)
	originXML = models.TextField()

class optimization_variable_additionaldataitem(models.Model):
	primeID = models.OneToOneField(optimization_variable)
	description = models.CharField(max_length = 40)
	content = models.CharField(max_length = 80)

class optimization_variable_attatchment(models.Model):
	primeID = models.OneToOneField(optimization_variable)

class optimization_variable_bound(models.Model):
	primeID = models.CharField(max_length = 10)
	originXML = models.TextField()
	variableID = models.CharField(max_length = 9)

class optimization_variable_bound_attatchment(models.Model):
	primeID = models.OneToOneField(optimization_variable_bound)

class surrogate_model(models.Model):
	datasetID = models.CharField(max_length = 9)
	primeID = models.CharField(max_length = 10)
	preferredKey = models.CharField(max_length = 30)
	dataAttributeID = models.CharField(max_length = 9)
	originXML = models.TextField()

class surrogate_model_additionaldataitem(models.Model):
	datasetID = models.OneToOneField(surrogate_model)
	primeID = models.CharField(max_length = 10)
	description = models.CharField(max_length = 40)
	content =models.TextField()

class thermo_dynamic_polynomial(models.Model):
	primeID = models.CharField(max_length = 11)
	speciesID = models.CharField(max_length = 9)
	originXML = models.TextField()
	preferredKey = models.CharField(max_length = 10)

class thermo_bib(models.Model):
	primeID = models.OneToOneField(thermo_dynamic_polynomial)
	speciesID = models.CharField(max_length = 9)
	bibID = models.CharField(max_length= 9)
	bibPreferredKey = models.CharField(max_length = 20)

