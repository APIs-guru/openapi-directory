from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios:
    portfolio_values: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverageRequestBody:
    portfolios: List[PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios:
    portfolio_average_return: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioAverageReturn') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturnsAverage200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisReturnsAverageRequest:
    request: PostPortfolioAnalysisReturnsAverageRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisReturnsAverageResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_returns_average_200_application_json_object: Optional[PostPortfolioAnalysisReturnsAverage200ApplicationJSON] = field(default=None)
    
