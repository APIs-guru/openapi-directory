from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets:
    asset_prices: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetPrices' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequestBody:
    assets: List[PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    portfolios: List[PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequest:
    request: PostPortfolioSimulationRebalancingDriftWeightRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios:
    portfolio_values: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioValues' }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON:
    portfolios: List[PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioSimulationRebalancingDriftWeightResponse:
    content_type: str = field(default=None)
    post_portfolio_simulation_rebalancing_drift_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
