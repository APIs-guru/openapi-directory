from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UpdateSwaggerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSwaggerRequestBodySwagger:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    swagger: str = field(default=None, metadata={'multipart_form': { 'field_name': 'swagger' }})
    

@dataclass
class UpdateSwaggerRequestBody:
    swagger: Optional[UpdateSwaggerRequestBodySwagger] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UpdateSwaggerSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSwaggerRequest:
    path_params: UpdateSwaggerPathParams = field(default=None)
    request: UpdateSwaggerRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateSwaggerSecurity = field(default=None)
    

@dataclass
class UpdateSwaggerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
