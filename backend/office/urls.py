from django.urls import path
from office import views

urlpatterns = [
    path('all/', views.get_all_offices)
]