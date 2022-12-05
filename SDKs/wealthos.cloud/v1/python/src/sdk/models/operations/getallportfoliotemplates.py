from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetAllPortfolioTemplatesHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllPortfolioTemplatesSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetAllPortfolioTemplates200ApplicationJSON:
    r"""GetAllPortfolioTemplates200ApplicationJSON
    Array of all portfolio templates applicable to the investor
    """
    
    portfolio_templates: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolio_templates') }})
    

@dataclass
class GetAllPortfolioTemplatesRequest:
    headers: GetAllPortfolioTemplatesHeaders = field()
    security: GetAllPortfolioTemplatesSecurity = field()
    

@dataclass
class GetAllPortfolioTemplatesResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_portfolio_templates_200_application_json_object: Optional[GetAllPortfolioTemplates200ApplicationJSON] = field(default=None)
    get_all_portfolio_templates_401_application_json_any: Optional[Any] = field(default=None)
    get_all_portfolio_templates_403_application_json_any: Optional[Any] = field(default=None)
    get_all_portfolio_templates_404_application_json_any: Optional[Any] = field(default=None)
    get_all_portfolio_templates_429_application_json_any: Optional[Any] = field(default=None)
    get_all_portfolio_templates_500_application_json_any: Optional[Any] = field(default=None)
    
