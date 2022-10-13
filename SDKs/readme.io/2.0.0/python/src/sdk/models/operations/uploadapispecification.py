from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UploadAPISpecificationHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version' }})
    

@dataclass
class UploadAPISpecificationRequestBodySpec:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    spec: str = field(default=None, metadata={'multipart_form': { 'field_name': 'spec' }})
    

@dataclass
class UploadAPISpecificationRequestBody:
    spec: Optional[UploadAPISpecificationRequestBodySpec] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UploadAPISpecificationRequest:
    headers: UploadAPISpecificationHeaders = field(default=None)
    request: UploadAPISpecificationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadAPISpecificationSecurity = field(default=None)
    

@dataclass
class UploadAPISpecificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
