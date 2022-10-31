from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CreateFolderHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFolderSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFolderRequest:
    headers: CreateFolderHeaders = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFolderSecurity = field(default=None)
    

@dataclass
class CreateFolderResponse:
    content_type: str = field(default=None)
    folder: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
