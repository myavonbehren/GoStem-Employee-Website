from django.urls import path
from polls import views

urlpatterns = [
    path("", views.index, name="index"),
    path("chat/", views.chatPage, name="chat-page")
]