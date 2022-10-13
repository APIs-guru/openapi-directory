from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTerminalRefundSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTerminalRefundRequest:
    request: shared.CreateTerminalRefundRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTerminalRefundSecurity = field(default=None)
    

@dataclass
class CreateTerminalRefundResponse:
    content_type: str = field(default=None)
    create_terminal_refund_response: Optional[shared.CreateTerminalRefundResponse] = field(default=None)
    status_code: int = field(default=None)
    
