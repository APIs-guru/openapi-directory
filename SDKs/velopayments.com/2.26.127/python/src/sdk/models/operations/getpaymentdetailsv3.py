from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPaymentDetailsV3PathParams:
    payment_id: str = field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentDetailsV3QueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentDetailsV3Request:
    path_params: GetPaymentDetailsV3PathParams = field()
    query_params: GetPaymentDetailsV3QueryParams = field()
    

@dataclass
class GetPaymentDetailsV3Response:
    content_type: str = field()
    status_code: int = field()
    payment_response_v3: Optional[shared.PaymentResponseV3] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
