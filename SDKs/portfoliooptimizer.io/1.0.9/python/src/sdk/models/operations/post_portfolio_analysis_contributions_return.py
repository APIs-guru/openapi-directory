from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturnRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroups' }})
    assets_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsReturns' }})
    portfolios: List[PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisContributionsReturnRequest:
    request: PostPortfolioAnalysisContributionsReturnRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios:
    assets_groups_return_contributions: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroupsReturnContributions' }})
    assets_return_contributions: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsReturnContributions' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisContributionsReturn200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisContributionsReturnResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_contributions_return_200_application_json_object: Optional[PostPortfolioAnalysisContributionsReturn200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
