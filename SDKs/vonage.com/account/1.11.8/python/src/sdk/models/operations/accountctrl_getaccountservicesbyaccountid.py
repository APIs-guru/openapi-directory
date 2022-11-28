from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCtrlGetAccountServicesByAccountIDPathParams:
    account_id: float = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountCtrlGetAccountServicesByAccountIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AccountCtrlGetAccountServicesByAccountIDRequest:
    path_params: AccountCtrlGetAccountServicesByAccountIDPathParams = field()
    security: AccountCtrlGetAccountServicesByAccountIDSecurity = field()
    

@dataclass
class AccountCtrlGetAccountServicesByAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    account_hal_response: Optional[shared.AccountHalResponse] = field(default=None)
    
