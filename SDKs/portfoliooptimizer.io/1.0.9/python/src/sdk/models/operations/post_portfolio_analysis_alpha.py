from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostPortfolioAnalysisAlphaRequest:
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios:
    portfolio_alpha: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioAlpha' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisAlpha200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisAlphaResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_alpha_200_application_json_object: Optional[PostPortfolioAnalysisAlpha200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
