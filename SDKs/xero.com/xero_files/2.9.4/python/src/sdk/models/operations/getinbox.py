from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetInboxHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInboxSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInboxRequest:
    headers: GetInboxHeaders = field()
    security: GetInboxSecurity = field()
    

@dataclass
class GetInboxResponse:
    content_type: str = field()
    status_code: int = field()
    folder: Optional[Any] = field(default=None)
    
