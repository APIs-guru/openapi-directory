from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CallVMTransferPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CallVMTransferRequest:
    path_params: CallVMTransferPathParams = field(default=None)
    

@dataclass
class CallVMTransferResponse:
    call: Optional[shared.Call] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
