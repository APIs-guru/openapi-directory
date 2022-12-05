from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreatePortfolioTemplateHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePortfolioTemplateSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreatePortfolioTemplateRequest:
    headers: CreatePortfolioTemplateHeaders = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePortfolioTemplateSecurity = field()
    

@dataclass
class CreatePortfolioTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    create_portfolio_template_201_application_json_any: Optional[Any] = field(default=None)
    create_portfolio_template_400_application_json_any: Optional[Any] = field(default=None)
    create_portfolio_template_401_application_json_any: Optional[Any] = field(default=None)
    create_portfolio_template_403_application_json_any: Optional[Any] = field(default=None)
    create_portfolio_template_404_application_json_any: Optional[Any] = field(default=None)
    create_portfolio_template_429_application_json_any: Optional[Any] = field(default=None)
    create_portfolio_template_500_application_json_any: Optional[Any] = field(default=None)
    
