from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetFolderPathParams:
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFolderHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFolderSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFolderRequest:
    path_params: GetFolderPathParams = field(default=None)
    headers: GetFolderHeaders = field(default=None)
    security: GetFolderSecurity = field(default=None)
    

@dataclass
class GetFolderResponse:
    content_type: str = field(default=None)
    folder: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
