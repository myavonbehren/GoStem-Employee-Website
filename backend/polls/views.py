from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Event

def event_get_detail(request):
    event = Event.objects.all()
    #return render(request, )

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def chat(request):
    return render(request, "polls/chat.html") # Create a template for the chat page

def chatPage(request, *args, **kwargs):
    context = {}
    return render(request, "polls/chatPage.html", context)