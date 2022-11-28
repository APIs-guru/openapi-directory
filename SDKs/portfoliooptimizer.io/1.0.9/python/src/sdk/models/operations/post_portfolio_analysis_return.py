from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisReturn200ApplicationJSONPortfolios:
    portfolio_return: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturn') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisReturn200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisReturn200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisReturnRequest:
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisReturnResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_return_200_application_json_object: Optional[PostPortfolioAnalysisReturn200ApplicationJSON] = field(default=None)
    
