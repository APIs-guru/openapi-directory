from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTerminalRefundPathParams:
    terminal_refund_id: str = field(default=None, metadata={'path_param': { 'field_name': 'terminal_refund_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTerminalRefundSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTerminalRefundRequest:
    path_params: GetTerminalRefundPathParams = field(default=None)
    security: GetTerminalRefundSecurity = field(default=None)
    

@dataclass
class GetTerminalRefundResponse:
    content_type: str = field(default=None)
    get_terminal_refund_response: Optional[shared.GetTerminalRefundResponse] = field(default=None)
    status_code: int = field(default=None)
    
