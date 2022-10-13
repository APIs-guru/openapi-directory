from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PayorCreateApplicationRequestPathParams:
    payor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayorCreateApplicationRequestRequest:
    path_params: PayorCreateApplicationRequestPathParams = field(default=None)
    request: shared.PayorCreateApplicationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PayorCreateApplicationRequestResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    
