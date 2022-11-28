from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioConstructionMimickingRequestBodyAssets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionMimickingRequestBodyConstraints:
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    assets_groups_matrix: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsMatrix') }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsGroupsWeights') }})
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPortfolioExposure') }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPortfolioExposure') }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionMimickingRequestBody:
    assets: List[PostPortfolioConstructionMimickingRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    benchmark_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmarkReturns') }})
    constraints: Optional[PostPortfolioConstructionMimickingRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionMimicking200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioConstructionMimickingRequest:
    request: PostPortfolioConstructionMimickingRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioConstructionMimickingResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_construction_mimicking_200_application_json_object: Optional[PostPortfolioConstructionMimicking200ApplicationJSON] = field(default=None)
    
