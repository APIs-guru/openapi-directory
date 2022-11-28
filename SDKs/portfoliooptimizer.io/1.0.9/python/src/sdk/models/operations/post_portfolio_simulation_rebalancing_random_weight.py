from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets:
    asset_prices: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPrices') }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequestBody:
    assets: List[PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    portfolios: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios:
    portfolio_values: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON:
    portfolios: List[PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequest:
    request: PostPortfolioSimulationRebalancingRandomWeightRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioSimulationRebalancingRandomWeightResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_simulation_rebalancing_random_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON] = field(default=None)
    
