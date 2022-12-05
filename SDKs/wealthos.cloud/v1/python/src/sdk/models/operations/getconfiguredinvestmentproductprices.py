from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared

class GetConfiguredInvestmentProductPricesStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass
class GetConfiguredInvestmentProductPricesQueryParams:
    page_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[GetConfiguredInvestmentProductPricesStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConfiguredInvestmentProductPricesHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfiguredInvestmentProductPricesSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetConfiguredInvestmentProductPrices200ApplicationJSON:
    investment_product_unit_prices: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_product_unit_prices') }})
    next_page_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    

@dataclass
class GetConfiguredInvestmentProductPricesRequest:
    headers: GetConfiguredInvestmentProductPricesHeaders = field()
    query_params: GetConfiguredInvestmentProductPricesQueryParams = field()
    security: GetConfiguredInvestmentProductPricesSecurity = field()
    

@dataclass
class GetConfiguredInvestmentProductPricesResponse:
    content_type: str = field()
    status_code: int = field()
    get_configured_investment_product_prices_200_application_json_object: Optional[GetConfiguredInvestmentProductPrices200ApplicationJSON] = field(default=None)
    get_configured_investment_product_prices_401_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_product_prices_403_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_product_prices_404_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_product_prices_429_application_json_any: Optional[Any] = field(default=None)
    get_configured_investment_product_prices_500_application_json_any: Optional[Any] = field(default=None)
    
