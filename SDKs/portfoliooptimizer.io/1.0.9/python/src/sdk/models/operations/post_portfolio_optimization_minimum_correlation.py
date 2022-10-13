from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationMinimumCorrelationRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    assets_volatilities: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsVolatilities' }})
    

@dataclass
class PostPortfolioOptimizationMinimumCorrelationRequest:
    request: PostPortfolioOptimizationMinimumCorrelationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationMinimumCorrelationResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_minimum_correlation_200_application_json_object: Optional[PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
