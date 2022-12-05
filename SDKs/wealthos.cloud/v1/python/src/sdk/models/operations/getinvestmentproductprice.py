from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared
from sdk.models import shared

class GetInvestmentProductPriceCategoryIDEnum(str, Enum):
    FUNDS = "funds"


@dataclass
class GetInvestmentProductPricePathParams:
    category_id: GetInvestmentProductPriceCategoryIDEnum = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    investment_product_id: str = field(metadata={'path_param': { 'field_name': 'investment_product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvestmentProductPriceHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvestmentProductPriceSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetInvestmentProductPriceRequest:
    headers: GetInvestmentProductPriceHeaders = field()
    path_params: GetInvestmentProductPricePathParams = field()
    security: GetInvestmentProductPriceSecurity = field()
    

@dataclass
class GetInvestmentProductPriceResponse:
    content_type: str = field()
    status_code: int = field()
    get_investment_product_price_200_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_price_401_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_price_403_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_price_404_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_price_429_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_price_500_application_json_any: Optional[Any] = field(default=None)
    
