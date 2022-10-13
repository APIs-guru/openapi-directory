from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody1Assets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody1:
    assets: List[PostAssetsVolatilityRequestBody1Assets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody2:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody3Assets:
    asset_variance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetVariance' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody3:
    assets: List[PostAssetsVolatilityRequestBody3Assets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVolatilityRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatility200ApplicationJSONAssets:
    asset_volatility: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetVolatility' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatility200ApplicationJSON:
    assets: List[PostAssetsVolatility200ApplicationJSONAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVolatilityResponse:
    content_type: str = field(default=None)
    post_assets_volatility_200_application_json_object: Optional[PostAssetsVolatility200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
