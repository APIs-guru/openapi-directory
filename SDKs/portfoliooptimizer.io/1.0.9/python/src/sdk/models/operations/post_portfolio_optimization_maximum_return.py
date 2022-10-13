from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationMaximumReturnRequestBodyConstraints:
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroups' }})
    assets_groups_matrix: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroupsMatrix' }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumAssetsGroupsWeights' }})
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumAssetsWeights' }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPortfolioExposure' }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumAssetsWeights' }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumPortfolioExposure' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMaximumReturnRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    assets_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsReturns' }})
    constraints: Optional[PostPortfolioOptimizationMaximumReturnRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    

@dataclass
class PostPortfolioOptimizationMaximumReturnRequest:
    request: PostPortfolioOptimizationMaximumReturnRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMaximumReturn200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationMaximumReturnResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_maximum_return_200_application_json_object: Optional[PostPortfolioOptimizationMaximumReturn200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
