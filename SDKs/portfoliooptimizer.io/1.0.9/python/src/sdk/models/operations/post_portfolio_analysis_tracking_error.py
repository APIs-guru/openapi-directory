from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios:
    portfolio_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturns') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingErrorRequestBody:
    benchmark_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmarkReturns') }})
    portfolios: List[PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios:
    portfolio_tracking_error: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioTrackingError') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisTrackingError200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisTrackingErrorRequest:
    request: PostPortfolioAnalysisTrackingErrorRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisTrackingErrorResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_tracking_error_200_application_json_object: Optional[PostPortfolioAnalysisTrackingError200ApplicationJSON] = field(default=None)
    
