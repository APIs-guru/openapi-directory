from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayorGetBrandingPathParams:
    payor_id: str = field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayorGetBrandingRequest:
    path_params: PayorGetBrandingPathParams = field()
    

@dataclass
class PayorGetBrandingResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payor_branding_response: Optional[shared.PayorBrandingResponse] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
