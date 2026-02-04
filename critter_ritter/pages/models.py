from django.db import models
from django.contrib.auth.models import User

class Animal(models.Model):
    name = models.CharField()
    bio = models.TextField()
    date_added = models.DateField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)