from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets:
    asset_prices: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetPrices' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequestBody:
    assets: List[PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    portfolios: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequest:
    request: PostPortfolioSimulationRebalancingRandomWeightRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios:
    portfolio_values: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioValues' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON:
    portfolios: List[PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioSimulationRebalancingRandomWeightResponse:
    content_type: str = field(default=None)
    post_portfolio_simulation_rebalancing_random_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
