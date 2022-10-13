from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSuperfundPathParams:
    super_fund_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SuperFundID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuperfundHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetSuperfundSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSuperfundRequest:
    path_params: GetSuperfundPathParams = field(default=None)
    headers: GetSuperfundHeaders = field(default=None)
    security: GetSuperfundSecurity = field(default=None)
    

@dataclass
class GetSuperfundResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    super_funds: Optional[shared.SuperFunds] = field(default=None)
    
