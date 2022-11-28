from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets:
    asset_prices: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPrices') }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBody:
    assets: List[PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    portfolios: List[PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios:
    portfolio_values: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclass
class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON:
    portfolios: List[PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequest:
    request: PostPortfolioSimulationRebalancingFixedWeightRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioSimulationRebalancingFixedWeightResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_simulation_rebalancing_fixed_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON] = field(default=None)
    
