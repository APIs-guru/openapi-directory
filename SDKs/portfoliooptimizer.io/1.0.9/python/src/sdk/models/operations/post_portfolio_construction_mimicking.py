from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioConstructionMimickingRequestBodyAssets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionMimickingRequestBodyConstraints:
    assets_groups: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroups' }})
    assets_groups_matrix: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsGroupsMatrix' }})
    maximum_assets_groups_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumAssetsGroupsWeights' }})
    maximum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumAssetsWeights' }})
    maximum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPortfolioExposure' }})
    minimum_assets_weights: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumAssetsWeights' }})
    minimum_portfolio_exposure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumPortfolioExposure' }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionMimickingRequestBody:
    assets: List[PostPortfolioConstructionMimickingRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    benchmark_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benchmarkReturns' }})
    constraints: Optional[PostPortfolioConstructionMimickingRequestBodyConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    

@dataclass
class PostPortfolioConstructionMimickingRequest:
    request: PostPortfolioConstructionMimickingRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioConstructionMimicking200ApplicationJSON:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass
class PostPortfolioConstructionMimickingResponse:
    content_type: str = field(default=None)
    post_portfolio_construction_mimicking_200_application_json_object: Optional[PostPortfolioConstructionMimicking200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
