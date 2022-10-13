from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFilePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFileHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id' }})
    

@dataclass
class UpdateFileSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFileRequest:
    path_params: UpdateFilePathParams = field(default=None)
    headers: UpdateFileHeaders = field(default=None)
    request: Optional[shared.FileObject] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFileSecurity = field(default=None)
    

@dataclass
class UpdateFileResponse:
    content_type: str = field(default=None)
    file_object: Optional[shared.FileObject] = field(default=None)
    status_code: int = field(default=None)
    
