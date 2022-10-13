from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody1Assets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody1:
    assets: List[PostAssetsVarianceRequestBody1Assets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody2:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody3Assets:
    asset_volatility: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetVolatility' }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceRequestBody3:
    assets: List[PostAssetsVarianceRequestBody3Assets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVarianceRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsVariance200ApplicationJSONAssets:
    asset_variance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetVariance' }})
    

@dataclass_json
@dataclass
class PostAssetsVariance200ApplicationJSON:
    assets: List[PostAssetsVariance200ApplicationJSONAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVarianceResponse:
    content_type: str = field(default=None)
    post_assets_variance_200_application_json_object: Optional[PostAssetsVariance200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
