from django.shortcuts import render

from cars.models import Car, Brand


# Create your views here.
def base(request):
    cars = Car.objects.all()  # noqa
    brands = Brand.objects.all()
    return render(request, 'index.html', {'cars': cars, 'brands': brands})


# def home(request):
def filter(request):
    if request.method == 'POST':
        brand_id = request.POST.get('brand')
        price_range = request.POST.get('price')
        cars = Car.objects.all()
        brands=Brand.objects.all()

        if brand_id != 'all':
            cars = cars.filter(brand_id=brand_id)

        if price_range == 'low':
            cars = cars.filter(price__lte=20000)
        elif price_range == 'medium':
            cars = cars.filter(price__gt=20000, price__lte=50000)
        elif price_range == 'high':
            cars = cars.filter(price__gt=50000)

        return render(request, 'index.html', {'cars': cars,'brands': brands})
