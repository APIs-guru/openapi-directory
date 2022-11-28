from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    assets_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    risk_free_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskFreeRate') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsRequest:
    request: PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_equal_sharpe_ratio_contributions_200_application_json_object: Optional[PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON] = field(default=None)
    
