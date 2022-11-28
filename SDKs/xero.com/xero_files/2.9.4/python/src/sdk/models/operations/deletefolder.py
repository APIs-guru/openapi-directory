from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteFolderPathParams:
    folder_id: str = field(metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFolderHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFolderSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFolderRequest:
    headers: DeleteFolderHeaders = field()
    path_params: DeleteFolderPathParams = field()
    security: DeleteFolderSecurity = field()
    

@dataclass
class DeleteFolderResponse:
    content_type: str = field()
    status_code: int = field()
    
