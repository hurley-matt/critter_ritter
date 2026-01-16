from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Homepage</h1>")

def signup(request):
    return HttpResponse("<h1>Signup</h1>")
