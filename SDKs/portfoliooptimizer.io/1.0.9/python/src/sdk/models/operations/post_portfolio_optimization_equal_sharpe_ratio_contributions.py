from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    assets_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsReturns' }})
    risk_free_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riskFreeRate' }})
    

@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsRequest:
    request: PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_equal_sharpe_ratio_contributions_200_application_json_object: Optional[PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
