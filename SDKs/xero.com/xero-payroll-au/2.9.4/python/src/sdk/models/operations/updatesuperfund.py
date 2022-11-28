from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSuperfundPathParams:
    super_fund_id: str = field(metadata={'path_param': { 'field_name': 'SuperFundID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSuperfundHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSuperfundSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSuperfundRequest:
    headers: UpdateSuperfundHeaders = field()
    path_params: UpdateSuperfundPathParams = field()
    security: UpdateSuperfundSecurity = field()
    request: Optional[List[shared.SuperFundInput]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSuperfundResponse:
    content_type: str = field()
    status_code: int = field()
    super_funds: Optional[shared.SuperFunds] = field(default=None)
    
