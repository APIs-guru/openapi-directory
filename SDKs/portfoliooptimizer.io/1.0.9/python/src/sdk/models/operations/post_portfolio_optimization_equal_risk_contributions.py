from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints:
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    constraints: Optional[PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequest:
    request: PostPortfolioOptimizationEqualRiskContributionsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationEqualRiskContributionsResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_equal_risk_contributions_200_application_json_object: Optional[PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON] = field(default=None)
    
