from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteFilePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'FileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFileRequest:
    headers: DeleteFileHeaders = field()
    path_params: DeleteFilePathParams = field()
    security: DeleteFileSecurity = field()
    

@dataclass
class DeleteFileResponse:
    content_type: str = field()
    status_code: int = field()
    
