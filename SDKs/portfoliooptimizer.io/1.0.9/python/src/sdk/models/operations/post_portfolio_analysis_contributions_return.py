from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturnRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    portfolios: List[PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios:
    assets_return_contributions: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturnContributions') }})
    assets_groups_return_contributions: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsReturnContributions') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturn200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisContributionsReturnRequest:
    request: PostPortfolioAnalysisContributionsReturnRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisContributionsReturnResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_contributions_return_200_application_json_object: Optional[PostPortfolioAnalysisContributionsReturn200ApplicationJSON] = field(default=None)
    
