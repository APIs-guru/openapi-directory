from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRiskRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroups' }})
    portfolios: List[PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisContributionsRiskRequest:
    request: PostPortfolioAnalysisContributionsRiskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios:
    assets_groups_risk_contributions: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroupsRiskContributions' }})
    assets_risk_contributions: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsRiskContributions' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRisk200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisContributionsRiskResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_contributions_risk_200_application_json_object: Optional[PostPortfolioAnalysisContributionsRisk200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
