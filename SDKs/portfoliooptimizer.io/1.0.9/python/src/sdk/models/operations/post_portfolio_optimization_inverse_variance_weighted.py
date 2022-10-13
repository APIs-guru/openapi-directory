from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVarianceWeightedRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_variances: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsVariances' }})
    

@dataclass
class PostPortfolioOptimizationInverseVarianceWeightedRequest:
    request: PostPortfolioOptimizationInverseVarianceWeightedRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationInverseVarianceWeightedResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_inverse_variance_weighted_200_application_json_object: Optional[PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
