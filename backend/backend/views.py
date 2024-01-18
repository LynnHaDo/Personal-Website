from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from backend.models import ProjectModel
from backend.serializers import ProjectModelSerializer

from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def get_data(request):
    data = ProjectModel.objects.all()
    if request.method == 'GET':
        serializer = ProjectModelSerializer(data, many = True)
        return JsonResponse(serializer.data, safe=False)
