from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSwaggerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSwaggerRequestBodySwagger:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    swagger: str = field(metadata={'multipart_form': { 'field_name': 'swagger' }})
    

@dataclass
class UpdateSwaggerRequestBody:
    swagger: Optional[UpdateSwaggerRequestBodySwagger] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UpdateSwaggerSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSwaggerRequest:
    path_params: UpdateSwaggerPathParams = field()
    request: UpdateSwaggerRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateSwaggerSecurity = field()
    

@dataclass
class UpdateSwaggerResponse:
    content_type: str = field()
    status_code: int = field()
    
