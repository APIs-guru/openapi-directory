from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_volatilities: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVolatilities') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedRequest:
    request: PostPortfolioOptimizationInverseVolatilityWeightedRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_inverse_volatility_weighted_200_application_json_object: Optional[PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON] = field(default=None)
    
