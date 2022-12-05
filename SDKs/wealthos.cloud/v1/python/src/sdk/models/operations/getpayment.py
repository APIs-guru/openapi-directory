from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetPaymentPathParams:
    transaction_id: str = field(metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPaymentRequest:
    headers: GetPaymentHeaders = field()
    path_params: GetPaymentPathParams = field()
    security: GetPaymentSecurity = field()
    

@dataclass
class GetPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    root_type_for_payments: Optional[Any] = field(default=None)
    get_payment_400_application_json_any: Optional[Any] = field(default=None)
    get_payment_401_application_json_any: Optional[Any] = field(default=None)
    get_payment_403_application_json_any: Optional[Any] = field(default=None)
    get_payment_404_application_json_any: Optional[Any] = field(default=None)
    get_payment_429_application_json_any: Optional[Any] = field(default=None)
    get_payment_500_application_json_any: Optional[Any] = field(default=None)
    
