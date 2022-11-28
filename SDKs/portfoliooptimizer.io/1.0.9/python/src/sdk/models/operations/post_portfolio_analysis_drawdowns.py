from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios:
    portfolio_values: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdownsRequestBody:
    portfolios: List[PostPortfolioAnalysisDrawdownsRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns:
    drawdown_bottom: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownBottom') }})
    drawdown_depth: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownDepth') }})
    drawdown_end: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownEnd') }})
    drawdown_start: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownStart') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios:
    portfolio_drawdowns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioDrawdowns') }})
    portfolio_worst_drawdowns: List[PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioWorstDrawdowns') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisDrawdownsRequest:
    request: PostPortfolioAnalysisDrawdownsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisDrawdownsResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_drawdowns_200_application_json_object: Optional[PostPortfolioAnalysisDrawdowns200ApplicationJSON] = field(default=None)
    
