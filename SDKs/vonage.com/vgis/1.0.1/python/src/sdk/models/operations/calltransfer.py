from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CallTransferPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CallTransferRequest:
    path_params: CallTransferPathParams = field()
    request: shared.CallTransfer = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CallTransferResponse:
    content_type: str = field()
    status_code: int = field()
    call: Optional[shared.Call] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
