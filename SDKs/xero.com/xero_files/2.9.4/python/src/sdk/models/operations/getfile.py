from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFilePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFileRequest:
    headers: GetFileHeaders = field()
    path_params: GetFilePathParams = field()
    security: GetFileSecurity = field()
    

@dataclass
class GetFileResponse:
    content_type: str = field()
    status_code: int = field()
    file_object: Optional[shared.FileObject] = field(default=None)
    
