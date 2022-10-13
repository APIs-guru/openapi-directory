from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UploadSwaggerRequestBodySwagger:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    swagger: str = field(default=None, metadata={'multipart_form': { 'field_name': 'swagger' }})
    

@dataclass
class UploadSwaggerRequestBody:
    swagger: Optional[UploadSwaggerRequestBodySwagger] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadSwaggerSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UploadSwaggerRequest:
    request: UploadSwaggerRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadSwaggerSecurity = field(default=None)
    

@dataclass
class UploadSwaggerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
