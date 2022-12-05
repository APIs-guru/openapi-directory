from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetPotPaymentsPathParams:
    pot_id: str = field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotPaymentsQueryParams:
    page_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    payment_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payment_type', 'style': 'form', 'explode': True }})
    purpose: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'purpose', 'style': 'form', 'explode': True }})
    service_provider: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_provider', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPotPaymentsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotPaymentsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetPotPayments200ApplicationJSON:
    next_page_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    payments: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    pot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    

@dataclass
class GetPotPaymentsRequest:
    headers: GetPotPaymentsHeaders = field()
    path_params: GetPotPaymentsPathParams = field()
    query_params: GetPotPaymentsQueryParams = field()
    security: GetPotPaymentsSecurity = field()
    

@dataclass
class GetPotPaymentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_pot_payments_200_application_json_object: Optional[GetPotPayments200ApplicationJSON] = field(default=None)
    get_pot_payments_401_application_json_any: Optional[Any] = field(default=None)
    get_pot_payments_403_application_json_any: Optional[Any] = field(default=None)
    get_pot_payments_404_application_json_any: Optional[Any] = field(default=None)
    get_pot_payments_429_application_json_any: Optional[Any] = field(default=None)
    get_pot_payments_500_application_json_any: Optional[Any] = field(default=None)
    
