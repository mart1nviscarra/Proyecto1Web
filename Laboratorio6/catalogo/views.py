from django.shortcuts import render, get_object_or_404
from .models import Producto


def producto_lista(request):

    productos = Producto.objects.select_related('categoria').all()
    categoria_id = request.GET.get('categoria')
    if categoria_id:
        productos = productos.filter(categoria_id=categoria_id)
        
    contexto = {'productos': productos}

    return render(
        request,
        'catalogo/lista.html',
        contexto
    )


def producto_detalle(request, producto_id):

    producto = get_object_or_404(Producto.objects.select_related('categoria'),id=producto_id)
    contexto = {'producto': producto}

    return render(request,'catalogo/detalle.html',contexto)