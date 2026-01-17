from django.shortcuts import render
from django.http import HttpResponse



def home(request):
    return render(request, 'critter_ritter/homepage.html')

def signup(request):
    return render(request, 'critter_ritter/signup.html')
