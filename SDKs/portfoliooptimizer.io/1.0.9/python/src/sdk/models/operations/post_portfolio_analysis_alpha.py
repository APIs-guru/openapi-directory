from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios:
    portfolio_alpha: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioAlpha') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisAlpha200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisAlphaRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisAlphaResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_alpha_200_application_json_object: Optional[PostPortfolioAnalysisAlpha200ApplicationJSON] = field(default=None)
    
