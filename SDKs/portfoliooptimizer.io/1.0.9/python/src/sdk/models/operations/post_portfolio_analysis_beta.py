from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostPortfolioAnalysisBetaRequest:
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisBeta200ApplicationJSONPortfolios:
    portfolio_beta: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioBeta' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisBeta200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisBeta200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisBetaResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_beta_200_application_json_object: Optional[PostPortfolioAnalysisBeta200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
