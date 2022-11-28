from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PayorCreateApplicationRequestPathParams:
    payor_id: str = field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayorCreateApplicationRequestRequest:
    path_params: PayorCreateApplicationRequestPathParams = field()
    request: shared.PayorCreateApplicationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PayorCreateApplicationRequestResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    
