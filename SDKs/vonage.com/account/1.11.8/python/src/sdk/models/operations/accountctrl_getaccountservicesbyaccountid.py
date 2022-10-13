from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCtrlGetAccountServicesByAccountIDPathParams:
    account_id: float = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountCtrlGetAccountServicesByAccountIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AccountCtrlGetAccountServicesByAccountIDRequest:
    path_params: AccountCtrlGetAccountServicesByAccountIDPathParams = field(default=None)
    security: AccountCtrlGetAccountServicesByAccountIDSecurity = field(default=None)
    

@dataclass
class AccountCtrlGetAccountServicesByAccountIDResponse:
    account_hal_response: Optional[shared.AccountHalResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
