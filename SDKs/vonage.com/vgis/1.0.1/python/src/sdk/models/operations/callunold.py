from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CallUnoldPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CallUnoldRequest:
    path_params: CallUnoldPathParams = field(default=None)
    

@dataclass
class CallUnoldResponse:
    call: Optional[shared.Call] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
