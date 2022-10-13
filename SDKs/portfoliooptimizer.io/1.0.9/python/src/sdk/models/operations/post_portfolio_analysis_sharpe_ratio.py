from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostPortfolioAnalysisSharpeRatioRequest:
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios:
    portfolio_sharpe_ratio: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioSharpeRatio' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisSharpeRatio200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisSharpeRatioResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_sharpe_ratio_200_application_json_object: Optional[PostPortfolioAnalysisSharpeRatio200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
