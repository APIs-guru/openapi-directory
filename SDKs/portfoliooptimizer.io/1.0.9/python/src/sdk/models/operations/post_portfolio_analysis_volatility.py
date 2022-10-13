from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostPortfolioAnalysisVolatilityRequest:
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios:
    portfolio_volatility: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioVolatility' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisVolatility200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisVolatilityResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_volatility_200_application_json_object: Optional[PostPortfolioAnalysisVolatility200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
