from django.shortcuts import render,redirect

from cars.models import Car, Brand


# Create your views here.
def base(request):
    cars = Car.objects.all()  # noqa
    brands = Brand.objects.all()
    return render(request, 'index.html', {'cars': cars, 'brands': brands})


# def home(request):
from .models import Car, Brand

def filter(request):
    if request.method == 'POST':
        brand = request.POST.get('brand', 'all')
        price = request.POST.get('price', 'all')

        cars = Car.objects.all()

        if brand != 'all':
            cars = cars.filter(brand_id=brand)

        if price != 'all':
            if price == 'low':
                cars = cars.filter(price__lte=20000)
            elif price == 'medium':
                cars = cars.filter(price__gt=20000, price__lte=50000)
            elif price == 'high':
                cars = cars.filter(price__gt=50000)

        brands = Brand.objects.all()
        return render(request, 'index.html', {'cars': cars, 'brands': brands})

    # Fallback for GET
    return redirect('your_default_view')
