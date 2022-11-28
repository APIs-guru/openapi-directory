from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAPISpecificationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAPISpecificationRequestBodySpec:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    spec: str = field(metadata={'multipart_form': { 'field_name': 'spec' }})
    

@dataclass
class UpdateAPISpecificationRequestBody:
    spec: Optional[UpdateAPISpecificationRequestBodySpec] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UpdateAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAPISpecificationRequest:
    path_params: UpdateAPISpecificationPathParams = field()
    request: UpdateAPISpecificationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateAPISpecificationSecurity = field()
    

@dataclass
class UpdateAPISpecificationResponse:
    content_type: str = field()
    status_code: int = field()
    
