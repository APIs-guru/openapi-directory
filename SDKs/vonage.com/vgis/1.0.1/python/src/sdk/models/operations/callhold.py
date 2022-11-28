from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CallHoldPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CallHoldRequest:
    path_params: CallHoldPathParams = field()
    

@dataclass
class CallHoldResponse:
    content_type: str = field()
    status_code: int = field()
    call: Optional[shared.Call] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
