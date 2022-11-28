from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRiskRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    portfolios: List[PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios:
    assets_risk_contributions: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsRiskContributions') }})
    assets_groups_risk_contributions: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsRiskContributions') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsRisk200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisContributionsRiskRequest:
    request: PostPortfolioAnalysisContributionsRiskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisContributionsRiskResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_contributions_risk_200_application_json_object: Optional[PostPortfolioAnalysisContributionsRisk200ApplicationJSON] = field(default=None)
    
