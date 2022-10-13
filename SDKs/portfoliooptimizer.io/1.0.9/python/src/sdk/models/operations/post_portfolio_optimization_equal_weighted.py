from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualWeightedRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostPortfolioOptimizationEqualWeightedRequest:
    request: PostPortfolioOptimizationEqualWeightedRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualWeighted200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationEqualWeightedResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_equal_weighted_200_application_json_object: Optional[PostPortfolioOptimizationEqualWeighted200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
