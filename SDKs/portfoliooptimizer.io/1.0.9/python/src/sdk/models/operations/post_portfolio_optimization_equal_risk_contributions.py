from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints:
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumAssetsWeights' }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumAssetsWeights' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    constraints: Optional[PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    

@dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequest:
    request: PostPortfolioOptimizationEqualRiskContributionsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioOptimizationEqualRiskContributionsResponse:
    content_type: str = field(default=None)
    post_portfolio_optimization_equal_risk_contributions_200_application_json_object: Optional[PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
