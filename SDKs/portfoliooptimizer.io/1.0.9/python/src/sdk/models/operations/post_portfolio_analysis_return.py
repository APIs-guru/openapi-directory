from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostPortfolioAnalysisReturnRequest:
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturn200ApplicationJSONPortfolios:
    portfolio_return: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioReturn' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturn200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisReturn200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisReturnResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_return_200_application_json_object: Optional[PostPortfolioAnalysisReturn200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
