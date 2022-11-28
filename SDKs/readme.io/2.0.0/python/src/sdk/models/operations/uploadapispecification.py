from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadAPISpecificationHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadAPISpecificationRequestBodySpec:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    spec: str = field(metadata={'multipart_form': { 'field_name': 'spec' }})
    

@dataclass
class UploadAPISpecificationRequestBody:
    spec: Optional[UploadAPISpecificationRequestBodySpec] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UploadAPISpecificationRequest:
    headers: UploadAPISpecificationHeaders = field()
    request: UploadAPISpecificationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadAPISpecificationSecurity = field()
    

@dataclass
class UploadAPISpecificationResponse:
    content_type: str = field()
    status_code: int = field()
    
