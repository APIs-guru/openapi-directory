from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody1Assets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody1:
    assets: List[PostAssetsVarianceRequestBody1Assets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody2:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody3Assets:
    asset_volatility: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVolatility') }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody3:
    assets: List[PostAssetsVarianceRequestBody3Assets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsVariance200ApplicationJSONAssets:
    asset_variance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVariance') }})
    

@dataclass_json
@dataclass
class PostAssetsVariance200ApplicationJSON:
    assets: List[PostAssetsVariance200ApplicationJSONAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass
class PostAssetsVarianceRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsVarianceResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_variance_200_application_json_object: Optional[PostAssetsVariance200ApplicationJSON] = field(default=None)
    
