from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_market_capitalizations: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsMarketCapitalizations' }})
    

@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedRequest:
    request: PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_market_capitalization_weighted_200_application_json_object: Optional[PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
