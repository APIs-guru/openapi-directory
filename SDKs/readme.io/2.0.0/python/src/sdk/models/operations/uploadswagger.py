from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadSwaggerRequestBodySwagger:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    swagger: str = field(metadata={'multipart_form': { 'field_name': 'swagger' }})
    

@dataclass
class UploadSwaggerRequestBody:
    swagger: Optional[UploadSwaggerRequestBodySwagger] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadSwaggerSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UploadSwaggerRequest:
    request: UploadSwaggerRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadSwaggerSecurity = field()
    

@dataclass
class UploadSwaggerResponse:
    content_type: str = field()
    status_code: int = field()
    
