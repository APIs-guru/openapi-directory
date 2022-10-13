from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTerminalCheckoutSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTerminalCheckoutRequest:
    request: shared.CreateTerminalCheckoutRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTerminalCheckoutSecurity = field(default=None)
    

@dataclass
class CreateTerminalCheckoutResponse:
    content_type: str = field(default=None)
    create_terminal_checkout_response: Optional[shared.CreateTerminalCheckoutResponse] = field(default=None)
    status_code: int = field(default=None)
    
