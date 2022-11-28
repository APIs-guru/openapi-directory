from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios:
    portfolio_volatility: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioVolatility') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisVolatility200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisVolatilityRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisVolatilityResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_volatility_200_application_json_object: Optional[PostPortfolioAnalysisVolatility200ApplicationJSON] = field(default=None)
    
