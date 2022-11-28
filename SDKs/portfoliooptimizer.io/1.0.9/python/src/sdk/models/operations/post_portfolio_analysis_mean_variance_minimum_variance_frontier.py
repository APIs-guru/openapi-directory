from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints:
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    assets_groups_matrix: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsMatrix') }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsGroupsWeights') }})
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPortfolioExposure') }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPortfolioExposure') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    assets_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    constraints: Optional[PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    portfolios: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONPortfolios:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    portfolio_return: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturn') }})
    portfolio_volatility: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioVolatility') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest:
    request: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_mean_variance_minimum_variance_frontier_200_application_json_object: Optional[PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON] = field(default=None)
    
