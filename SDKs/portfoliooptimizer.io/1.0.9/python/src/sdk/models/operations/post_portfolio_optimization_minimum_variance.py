from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints:
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    assets_groups_matrix: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsMatrix') }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsGroupsWeights') }})
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPortfolioExposure') }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPortfolioExposure') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMinimumVarianceRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    assets_returns: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    constraints: Optional[PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMinimumVariance200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationMinimumVarianceRequest:
    request: PostPortfolioOptimizationMinimumVarianceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationMinimumVarianceResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_minimum_variance_200_application_json_object: Optional[PostPortfolioOptimizationMinimumVariance200ApplicationJSON] = field(default=None)
    
