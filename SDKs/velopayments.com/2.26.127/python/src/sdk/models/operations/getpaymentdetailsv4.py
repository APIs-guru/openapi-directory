from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPaymentDetailsV4PathParams:
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentDetailsV4QueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentDetailsV4Request:
    path_params: GetPaymentDetailsV4PathParams = field(default=None)
    query_params: GetPaymentDetailsV4QueryParams = field(default=None)
    

@dataclass
class GetPaymentDetailsV4Response:
    content_type: str = field(default=None)
    payment_response_v4: Optional[shared.PaymentResponseV4] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
