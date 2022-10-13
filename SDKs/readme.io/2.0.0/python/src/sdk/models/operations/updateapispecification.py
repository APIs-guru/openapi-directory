from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UpdateAPISpecificationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAPISpecificationRequestBodySpec:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    spec: str = field(default=None, metadata={'multipart_form': { 'field_name': 'spec' }})
    

@dataclass
class UpdateAPISpecificationRequestBody:
    spec: Optional[UpdateAPISpecificationRequestBodySpec] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UpdateAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAPISpecificationRequest:
    path_params: UpdateAPISpecificationPathParams = field(default=None)
    request: UpdateAPISpecificationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateAPISpecificationSecurity = field(default=None)
    

@dataclass
class UpdateAPISpecificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
