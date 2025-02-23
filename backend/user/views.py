from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


# Create your views here.
def home(request): 
    return render(request, "home.html")

def logout_view(request):
    logout(request)
    return redirect("")

@login_required
def dashboard(request):
    return render(request, "dashboard.html")