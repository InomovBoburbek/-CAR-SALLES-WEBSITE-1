from django.contrib import admin

from cars.models import Car, Brand

# Register your models here.
admin.site.register(Car)
admin.site.register(Brand)