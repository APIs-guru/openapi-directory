from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CallAnswerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CallAnswerRequest:
    path_params: CallAnswerPathParams = field(default=None)
    

@dataclass
class CallAnswerResponse:
    call: Optional[shared.Call] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
