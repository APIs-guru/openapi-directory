from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios:
    portfolio_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioReturns' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingErrorRequestBody:
    benchmark_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benchmarkReturns' }})
    portfolios: List[PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisTrackingErrorRequest:
    request: PostPortfolioAnalysisTrackingErrorRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios:
    portfolio_tracking_error: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioTrackingError' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingError200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisTrackingErrorResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_tracking_error_200_application_json_object: Optional[PostPortfolioAnalysisTrackingError200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
