from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCtrlGetLocationByIDPathParams:
    account_id: float = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    location_id: float = field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountCtrlGetLocationByIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AccountCtrlGetLocationByIDRequest:
    path_params: AccountCtrlGetLocationByIDPathParams = field()
    security: AccountCtrlGetLocationByIDSecurity = field()
    

@dataclass
class AccountCtrlGetLocationByIDResponse:
    content_type: str = field()
    status_code: int = field()
    location_hal_response: Optional[shared.LocationHalResponse] = field(default=None)
    
