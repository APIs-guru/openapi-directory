from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints:
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    assets_groups_matrix: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsMatrix') }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsGroupsWeights') }})
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPortfolioExposure') }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPortfolioExposure') }})
    portfolio_return: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturn') }})
    portfolio_volatility: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioVolatility') }})
    risk_tolerance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskTolerance') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMeanVarianceEfficientRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    assets_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    constraints: PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationMeanVarianceEfficientRequest:
    request: PostPortfolioOptimizationMeanVarianceEfficientRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationMeanVarianceEfficientResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_mean_variance_efficient_200_application_json_object: Optional[PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON] = field(default=None)
    
