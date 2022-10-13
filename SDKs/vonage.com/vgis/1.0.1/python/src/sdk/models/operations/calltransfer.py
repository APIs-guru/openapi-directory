from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CallTransferPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CallTransferRequest:
    path_params: CallTransferPathParams = field(default=None)
    request: shared.CallTransfer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CallTransferResponse:
    call: Optional[shared.Call] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
