from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelTerminalCheckoutPathParams:
    checkout_id: str = field(default=None, metadata={'path_param': { 'field_name': 'checkout_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelTerminalCheckoutSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelTerminalCheckoutRequest:
    path_params: CancelTerminalCheckoutPathParams = field(default=None)
    security: CancelTerminalCheckoutSecurity = field(default=None)
    

@dataclass
class CancelTerminalCheckoutResponse:
    cancel_terminal_checkout_response: Optional[shared.CancelTerminalCheckoutResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
