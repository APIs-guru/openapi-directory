from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios:
    portfolio_values: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioValues' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverageRequestBody:
    portfolios: List[PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisReturnsAverageRequest:
    request: PostPortfolioAnalysisReturnsAverageRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios:
    portfolio_average_return: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioAverageReturn' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverage200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisReturnsAverageResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_returns_average_200_application_json_object: Optional[PostPortfolioAnalysisReturnsAverage200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
