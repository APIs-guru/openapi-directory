from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared

class GetAllPaymentsSortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetAllPaymentsQueryParams:
    page_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    payment_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payment_type', 'style': 'form', 'explode': True }})
    purpose: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'purpose', 'style': 'form', 'explode': True }})
    service_provider: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_provider', 'style': 'form', 'explode': True }})
    sort: Optional[GetAllPaymentsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllPaymentsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllPaymentsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetAllPayments200ApplicationJSON:
    next_page_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    payments: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    

@dataclass
class GetAllPaymentsRequest:
    headers: GetAllPaymentsHeaders = field()
    query_params: GetAllPaymentsQueryParams = field()
    security: GetAllPaymentsSecurity = field()
    

@dataclass
class GetAllPaymentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_payments_200_application_json_object: Optional[GetAllPayments200ApplicationJSON] = field(default=None)
    get_all_payments_400_application_json_any: Optional[Any] = field(default=None)
    get_all_payments_401_application_json_any: Optional[Any] = field(default=None)
    get_all_payments_403_application_json_any: Optional[Any] = field(default=None)
    get_all_payments_404_application_json_any: Optional[Any] = field(default=None)
    get_all_payments_429_application_json_any: Optional[Any] = field(default=None)
    get_all_payments_500_application_json_any: Optional[Any] = field(default=None)
    
