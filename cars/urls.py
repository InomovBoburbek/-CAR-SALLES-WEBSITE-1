from django.contrib import admin
from django.urls import path

from cars.views import base, filter

urlpatterns = [
    path('', base),
    path('form/', filter,name='filter'),
]