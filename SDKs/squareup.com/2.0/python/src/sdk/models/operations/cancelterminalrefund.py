from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelTerminalRefundPathParams:
    terminal_refund_id: str = field(default=None, metadata={'path_param': { 'field_name': 'terminal_refund_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelTerminalRefundSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelTerminalRefundRequest:
    path_params: CancelTerminalRefundPathParams = field(default=None)
    security: CancelTerminalRefundSecurity = field(default=None)
    

@dataclass
class CancelTerminalRefundResponse:
    cancel_terminal_refund_response: Optional[shared.CancelTerminalRefundResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
