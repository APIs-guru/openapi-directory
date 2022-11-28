from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCtrlGetLocationsByAccountIDPathParams:
    account_id: float = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountCtrlGetLocationsByAccountIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AccountCtrlGetLocationsByAccountIDRequest:
    path_params: AccountCtrlGetLocationsByAccountIDPathParams = field()
    security: AccountCtrlGetLocationsByAccountIDSecurity = field()
    

@dataclass
class AccountCtrlGetLocationsByAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    locations_hal_response: Optional[shared.LocationsHalResponse] = field(default=None)
    
