from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSuperfundPathParams:
    super_fund_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SuperFundID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSuperfundHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSuperfundSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSuperfundRequest:
    path_params: UpdateSuperfundPathParams = field(default=None)
    headers: UpdateSuperfundHeaders = field(default=None)
    request: Optional[List[shared.SuperFund]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateSuperfundSecurity = field(default=None)
    

@dataclass
class UpdateSuperfundResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    super_funds: Optional[shared.SuperFunds] = field(default=None)
    
