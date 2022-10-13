from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateSuperfundHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class CreateSuperfundSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSuperfundRequest:
    headers: CreateSuperfundHeaders = field(default=None)
    request: List[shared.SuperFund] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSuperfundSecurity = field(default=None)
    

@dataclass
class CreateSuperfundResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    super_funds: Optional[shared.SuperFunds] = field(default=None)
    
