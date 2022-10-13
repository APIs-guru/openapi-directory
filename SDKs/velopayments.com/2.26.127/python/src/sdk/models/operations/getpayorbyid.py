from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPayorByIDPathParams:
    payor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayorByIDRequest:
    path_params: GetPayorByIDPathParams = field(default=None)
    

@dataclass
class GetPayorByIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payor_v1: Optional[shared.PayorV1] = field(default=None)
    status_code: int = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
