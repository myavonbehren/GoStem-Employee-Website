from django.db import models

# Create your models here.
class User(models.Model):
    first_name  = models.CharField(max_length = 30)
    last_name   = models.CharField(max_length = 30)
    pronouns    = models.CharField(max_length = 10)
    role        = models.CharField(max_length = 30)
    prof_desc   = models.CharField(max_length = 250)
    email       = models.EmailField(max_length = 254)

    def __str__(self):
        return (self.first_name, self.last_name, self.pronouns, self.role, self.prof_desc, self.email)

class Tutor(models.Model):
    # referecing the user, the tutor is a set of users
    tutor       = models.ForeignKey(User, on_delete=models.CASCADE)

    # readable
    def __str__(self):
        return (self.tutor)

class Admin(models.Model): 
    # referecing the user, the admin is a set of users
    tutor       = models.ForeignKey(User, on_delete=models.CASCADE)

    # readable
    def __str__(self):
        return (self.admin)

class Event(models.Model):
    date        = models.DateField()
    location    = models.CharField(max_length=100)

    # readable
    def __str__(self):
        return (self.date, self.location)
    
class Assignees(models.Model):
    # referencing the event, this is so that the event will have a query set of assigned people to that event
    event       = models.ForeignKey(Event, on_delete=models.CASCADE) 

    # referencing a user, this is so that the assignee will be a reference to an actual user in the app
    assignee    = models.ForeignKey(User, on_delete=models.CASCADE)

    # readable
    def __str__(self):
        return (self.event, self.assignee)




    
