from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios:
    portfolio_sharpe_ratio: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioSharpeRatio') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisSharpeRatio200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisSharpeRatioRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisSharpeRatioResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_sharpe_ratio_200_application_json_object: Optional[PostPortfolioAnalysisSharpeRatio200ApplicationJSON] = field(default=None)
    
