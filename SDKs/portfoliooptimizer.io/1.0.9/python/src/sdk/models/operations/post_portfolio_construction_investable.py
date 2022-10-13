from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioConstructionInvestableRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroups' }})
    assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroupsWeights' }})
    assets_minimum_notional_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsMinimumNotionalValues' }})
    assets_minimum_positions: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsMinimumPositions' }})
    assets_prices: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsPrices' }})
    assets_size_lots: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsSizeLots' }})
    assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumAssetsGroupsWeights' }})
    portfolio_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioValue' }})
    

@dataclass
class PostPortfolioConstructionInvestableRequest:
    request: PostPortfolioConstructionInvestableRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionInvestable200ApplicationJSON:
    assets_positions: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsPositions' }})
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioConstructionInvestableResponse:
    content_type: str = field(default=None)
    post_portfolio_construction_investable_200_application_json_object: Optional[PostPortfolioConstructionInvestable200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
