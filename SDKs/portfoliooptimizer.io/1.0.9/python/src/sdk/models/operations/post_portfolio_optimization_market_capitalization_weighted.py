from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_market_capitalizations: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsMarketCapitalizations') }})
    

@dataclass_json
@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedRequest:
    request: PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_optimization_market_capitalization_weighted_200_application_json_object: Optional[PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON] = field(default=None)
    
