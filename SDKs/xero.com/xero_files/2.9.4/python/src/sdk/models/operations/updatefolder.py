from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateFolderPathParams:
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFolderHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFolderSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFolderRequest:
    path_params: UpdateFolderPathParams = field(default=None)
    headers: UpdateFolderHeaders = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFolderSecurity = field(default=None)
    

@dataclass
class UpdateFolderResponse:
    content_type: str = field(default=None)
    folder: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
