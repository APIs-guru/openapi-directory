from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPaymentDetailsV3PathParams:
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentDetailsV3QueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentDetailsV3Request:
    path_params: GetPaymentDetailsV3PathParams = field(default=None)
    query_params: GetPaymentDetailsV3QueryParams = field(default=None)
    

@dataclass
class GetPaymentDetailsV3Response:
    content_type: str = field(default=None)
    payment_response_v3: Optional[shared.PaymentResponseV3] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
