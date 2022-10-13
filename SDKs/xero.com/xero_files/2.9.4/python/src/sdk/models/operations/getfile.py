from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFilePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id' }})
    

@dataclass
class GetFileSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFileRequest:
    path_params: GetFilePathParams = field(default=None)
    headers: GetFileHeaders = field(default=None)
    security: GetFileSecurity = field(default=None)
    

@dataclass
class GetFileResponse:
    content_type: str = field(default=None)
    file_object: Optional[shared.FileObject] = field(default=None)
    status_code: int = field(default=None)
    
