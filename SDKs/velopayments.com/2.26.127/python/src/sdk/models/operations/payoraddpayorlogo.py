from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayorAddPayorLogoPathParams:
    payor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayorAddPayorLogoRequest:
    path_params: PayorAddPayorLogoPathParams = field(default=None)
    request: shared.PayorLogoRequest = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PayorAddPayorLogoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
