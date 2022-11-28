from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationMinimumCorrelationRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    assets_volatilities: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVolatilities') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationMinimumCorrelationRequest:
    request: PostPortfolioOptimizationMinimumCorrelationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationMinimumCorrelationResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_minimum_correlation_200_application_json_object: Optional[PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON] = field(default=None)
    
