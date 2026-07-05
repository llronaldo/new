from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from home.models import Contact
from home.serializers import ContactSerializer


class ContactCreateAPIView(generics.CreateAPIView):
    """联系表单 — 公开接口，无需认证"""

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
    authentication_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(
                {
                    'code': 200,
                    'message': '提交成功！我们会尽快与您联系。',
                    'data': serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {
                'code': 400,
                'message': '提交失败，请检查表单数据。',
                'errors': serializer.errors,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )
