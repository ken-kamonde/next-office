from django.db import models

# Create your models here.
class Office(models.Model):
    buildingName = models.CharField(max_length=100)
