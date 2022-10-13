from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios:
    portfolio_values: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioValues' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdownsRequestBody:
    portfolios: List[PostPortfolioAnalysisDrawdownsRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisDrawdownsRequest:
    request: PostPortfolioAnalysisDrawdownsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns:
    drawdown_bottom: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drawdownBottom' }})
    drawdown_depth: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drawdownDepth' }})
    drawdown_end: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drawdownEnd' }})
    drawdown_start: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drawdownStart' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios:
    portfolio_drawdowns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioDrawdowns' }})
    portfolio_worst_drawdowns: List[PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioWorstDrawdowns' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisDrawdownsResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_drawdowns_200_application_json_object: Optional[PostPortfolioAnalysisDrawdowns200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
