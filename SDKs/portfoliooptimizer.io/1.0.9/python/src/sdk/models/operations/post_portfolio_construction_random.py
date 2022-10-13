from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioConstructionRandomRequestBodyConstraints:
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumAssetsWeights' }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPortfolioExposure' }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumAssetsWeights' }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumPortfolioExposure' }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionRandomRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    constraints: Optional[PostPortfolioConstructionRandomRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    portfolios: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioConstructionRandomRequest:
    request: PostPortfolioConstructionRandomRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionRandom200ApplicationJSONPortfolios:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionRandom200ApplicationJSON:
    portfolios: List[PostPortfolioConstructionRandom200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioConstructionRandomResponse:
    content_type: str = field(default=None)
    post_portfolio_construction_random_200_application_json_object: Optional[PostPortfolioConstructionRandom200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
