from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared
from sdk.models import shared

class GetInvestmentProductCategoryIDEnum(str, Enum):
    FUNDS = "funds"


@dataclass
class GetInvestmentProductPathParams:
    category_id: GetInvestmentProductCategoryIDEnum = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    investment_product_id: str = field(metadata={'path_param': { 'field_name': 'investment_product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvestmentProductHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvestmentProductSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetInvestmentProductRequest:
    headers: GetInvestmentProductHeaders = field()
    path_params: GetInvestmentProductPathParams = field()
    security: GetInvestmentProductSecurity = field()
    

@dataclass
class GetInvestmentProductResponse:
    content_type: str = field()
    status_code: int = field()
    get_investment_product_200_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_401_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_403_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_404_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_429_application_json_any: Optional[Any] = field(default=None)
    get_investment_product_500_application_json_any: Optional[Any] = field(default=None)
    
