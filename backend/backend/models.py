from django.db import models

# Create your models here.
"""
Represents a project
"""
class ProjectModel(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField
    imageUrl = models.TextField
    githubUrl = models.URLField
    languages = models.TextField 
    frameworks = models.TextField 
    status = models.BooleanField # true for completed, false for in progress