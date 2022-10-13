from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets:
    asset_prices: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetPrices' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBody:
    assets: List[PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    portfolios: List[PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequest:
    request: PostPortfolioSimulationRebalancingFixedWeightRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios:
    portfolio_values: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioValues' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON:
    portfolios: List[PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioSimulationRebalancingFixedWeightResponse:
    content_type: str = field(default=None)
    post_portfolio_simulation_rebalancing_fixed_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
