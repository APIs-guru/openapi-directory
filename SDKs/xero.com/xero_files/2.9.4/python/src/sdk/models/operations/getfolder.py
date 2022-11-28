from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetFolderPathParams:
    folder_id: str = field(metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFolderHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFolderSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFolderRequest:
    headers: GetFolderHeaders = field()
    path_params: GetFolderPathParams = field()
    security: GetFolderSecurity = field()
    

@dataclass
class GetFolderResponse:
    content_type: str = field()
    status_code: int = field()
    folder: Optional[Any] = field(default=None)
    
