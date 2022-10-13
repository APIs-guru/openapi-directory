from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_volatilities: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsVolatilities' }})
    

@dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedRequest:
    request: PostPortfolioOptimizationInverseVolatilityWeightedRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_inverse_volatility_weighted_200_application_json_object: Optional[PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
