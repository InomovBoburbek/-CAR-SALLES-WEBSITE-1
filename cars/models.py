from django.db import models
from django.db.models import Model, CharField, ImageField, DecimalField, SmallIntegerField, TextChoices, TextField, \
    ForeignKey


class Brand(Model):
    name = CharField(max_length=120)

    def __str__(self):
        return self.name

# Create your models here.
class Car(Model):
    class TypeChoices(TextChoices):
        diesel = 'diesel', 'Diesel'
        petrol = 'petrol', 'Petrol'
        hybrid = 'hybrid', 'hybrid'
        gas = 'gas', 'Gas'

    class SegmentChoices(TextChoices):
        sport = 'sport', 'Sport'
        comfort = 'comfort', 'Comfort'

    name = CharField(max_length=255)
    about = CharField(max_length=255)
    image = ImageField(upload_to='cars/')
    price = SmallIntegerField()
    year = SmallIntegerField()
    run = SmallIntegerField()
    type = CharField(max_length=255, choices=TypeChoices.choices)
    segment = CharField(max_length=255, choices=SegmentChoices.choices)
    brand = ForeignKey(Brand, on_delete=models.CASCADE,related_name='cars')

    def __str__(self):
        return f'{self.brand.name} {self.type}'


class Connect(Model):
    phone = CharField(max_length=255)
    email = CharField(max_length=255)
    name = CharField(max_length=255)
    message = TextField()
