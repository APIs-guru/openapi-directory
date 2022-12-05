from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared

class GetConfiguredInvestmentProductsStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass
class GetConfiguredInvestmentProductsQueryParams:
    page_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[GetConfiguredInvestmentProductsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConfiguredInvestmentProductsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfiguredInvestmentProductsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetConfiguredInvestmentProducts200ApplicationJSON:
    investment_products: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_products') }})
    next_page_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    

@dataclass
class GetConfiguredInvestmentProductsRequest:
    headers: GetConfiguredInvestmentProductsHeaders = field()
    query_params: GetConfiguredInvestmentProductsQueryParams = field()
    security: GetConfiguredInvestmentProductsSecurity = field()
    

@dataclass
class GetConfiguredInvestmentProductsResponse:
    content_type: str = field()
    status_code: int = field()
    get_configured_investment_products_200_application_json_object: Optional[GetConfiguredInvestmentProducts200ApplicationJSON] = field(default=None)
    get_configured_investment_products_401_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_products_403_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_products_404_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_products_429_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_products_500_application_json_any: Optional[Any] = field(default=None)
    
