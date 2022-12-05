from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetPortfolioTemplatePathParams:
    portfolio_template_id: str = field(metadata={'path_param': { 'field_name': 'portfolio_template_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortfolioTemplateHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortfolioTemplateSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPortfolioTemplateRequest:
    headers: GetPortfolioTemplateHeaders = field()
    path_params: GetPortfolioTemplatePathParams = field()
    security: GetPortfolioTemplateSecurity = field()
    

@dataclass
class GetPortfolioTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    get_portfolio_template_200_application_json_any: Optional[Any] = field(default=None)
    get_portfolio_template_401_application_json_any: Optional[Any] = field(default=None)
    get_portfolio_template_403_application_json_any: Optional[Any] = field(default=None)
    get_portfolio_template_404_application_json_any: Optional[Any] = field(default=None)
    get_portfolio_template_429_application_json_any: Optional[Any] = field(default=None)
    get_portfolio_template_500_application_json_any: Optional[Any] = field(default=None)
    
