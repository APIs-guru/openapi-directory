from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateSuperfundHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSuperfundSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSuperfundRequest:
    headers: CreateSuperfundHeaders = field()
    request: List[shared.SuperFundInput] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSuperfundSecurity = field()
    

@dataclass
class CreateSuperfundResponse:
    content_type: str = field()
    status_code: int = field()
    super_funds: Optional[shared.SuperFunds] = field(default=None)
    
