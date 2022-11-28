from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualWeightedRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualWeighted200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationEqualWeightedRequest:
    request: PostPortfolioOptimizationEqualWeightedRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationEqualWeightedResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_equal_weighted_200_application_json_object: Optional[PostPortfolioOptimizationEqualWeighted200ApplicationJSON] = field(default=None)
    
