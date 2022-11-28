from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVarianceWeightedRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_variances: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVariances') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationInverseVarianceWeightedRequest:
    request: PostPortfolioOptimizationInverseVarianceWeightedRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationInverseVarianceWeightedResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_inverse_variance_weighted_200_application_json_object: Optional[PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON] = field(default=None)
    
