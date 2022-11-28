from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSuperfundPathParams:
    super_fund_id: str = field(metadata={'path_param': { 'field_name': 'SuperFundID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuperfundHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuperfundSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSuperfundRequest:
    headers: GetSuperfundHeaders = field()
    path_params: GetSuperfundPathParams = field()
    security: GetSuperfundSecurity = field()
    

@dataclass
class GetSuperfundResponse:
    content_type: str = field()
    status_code: int = field()
    super_funds: Optional[shared.SuperFunds] = field(default=None)
    
