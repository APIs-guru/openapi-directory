from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisBeta200ApplicationJSONPortfolios:
    portfolio_beta: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioBeta') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisBeta200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisBeta200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisBetaRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisBetaResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_beta_200_application_json_object: Optional[PostPortfolioAnalysisBeta200ApplicationJSON] = field(default=None)
    
