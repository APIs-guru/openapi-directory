from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioConstructionInvestableRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_prices: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsPrices') }})
    portfolio_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValue') }})
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsWeights') }})
    assets_minimum_notional_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsMinimumNotionalValues') }})
    assets_minimum_positions: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsMinimumPositions') }})
    assets_size_lots: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsSizeLots') }})
    assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsGroupsWeights') }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionInvestable200ApplicationJSON:
    assets_positions: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsPositions') }})
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioConstructionInvestableRequest:
    request: PostPortfolioConstructionInvestableRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioConstructionInvestableResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_construction_investable_200_application_json_object: Optional[PostPortfolioConstructionInvestable200ApplicationJSON] = field(default=None)
    
