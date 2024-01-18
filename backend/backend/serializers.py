from rest_framework import serializers
from backend.models import ProjectModel

class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectModel
        fields = ('title', 'description', 'imageUrl', 'githubUrl', 'languages', 'frameworks', 'status')