from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInboxHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id' }})
    

@dataclass
class GetInboxSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInboxRequest:
    headers: GetInboxHeaders = field(default=None)
    security: GetInboxSecurity = field(default=None)
    

@dataclass
class GetInboxResponse:
    content_type: str = field(default=None)
    folder: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
