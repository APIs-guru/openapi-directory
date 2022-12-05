from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class UpdatePortfolioTemplatePathParams:
    portfolio_template_id: str = field(metadata={'path_param': { 'field_name': 'portfolio_template_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePortfolioTemplateHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePortfolioTemplateSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdatePortfolioTemplateRequest:
    headers: UpdatePortfolioTemplateHeaders = field()
    path_params: UpdatePortfolioTemplatePathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePortfolioTemplateSecurity = field()
    

@dataclass
class UpdatePortfolioTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    update_portfolio_template_200_application_json_any: Optional[Any] = field(default=None)
    update_portfolio_template_400_application_json_any: Optional[Any] = field(default=None)
    update_portfolio_template_401_application_json_any: Optional[Any] = field(default=None)
    update_portfolio_template_403_application_json_any: Optional[Any] = field(default=None)
    update_portfolio_template_404_application_json_any: Optional[Any] = field(default=None)
    update_portfolio_template_409_application_json_any: Optional[Any] = field(default=None)
    update_portfolio_template_429_application_json_any: Optional[Any] = field(default=None)
    update_portfolio_template_500_application_json_any: Optional[Any] = field(default=None)
    
