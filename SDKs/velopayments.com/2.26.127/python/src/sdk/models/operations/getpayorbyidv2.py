from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPayorByIDV2PathParams:
    payor_id: str = field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayorByIDV2Request:
    path_params: GetPayorByIDV2PathParams = field()
    

@dataclass
class GetPayorByIDV2Response:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payor_v2: Optional[shared.PayorV2] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
