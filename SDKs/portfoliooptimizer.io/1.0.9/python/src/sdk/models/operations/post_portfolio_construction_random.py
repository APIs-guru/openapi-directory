from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioConstructionRandomRequestBodyConstraints:
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPortfolioExposure') }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPortfolioExposure') }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionRandomRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    constraints: Optional[PostPortfolioConstructionRandomRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    portfolios: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionRandom200ApplicationJSONPortfolios:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionRandom200ApplicationJSON:
    portfolios: List[PostPortfolioConstructionRandom200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioConstructionRandomRequest:
    request: PostPortfolioConstructionRandomRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioConstructionRandomResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_construction_random_200_application_json_object: Optional[PostPortfolioConstructionRandom200ApplicationJSON] = field(default=None)
    
