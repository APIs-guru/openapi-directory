from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTerminalCheckoutPathParams:
    checkout_id: str = field(default=None, metadata={'path_param': { 'field_name': 'checkout_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTerminalCheckoutSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTerminalCheckoutRequest:
    path_params: GetTerminalCheckoutPathParams = field(default=None)
    security: GetTerminalCheckoutSecurity = field(default=None)
    

@dataclass
class GetTerminalCheckoutResponse:
    content_type: str = field(default=None)
    get_terminal_checkout_response: Optional[shared.GetTerminalCheckoutResponse] = field(default=None)
    status_code: int = field(default=None)
    
