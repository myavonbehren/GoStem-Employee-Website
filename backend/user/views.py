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

# @login_required
# def dashboard(request):
#     return render(request, "dashboard.html")

@login_required
def dashboard(request):
    return redirect("/landing-page")  # Redirect to the root URL which will be handled by React Router

def landing_page(request):
    return render(request, 'index.html')