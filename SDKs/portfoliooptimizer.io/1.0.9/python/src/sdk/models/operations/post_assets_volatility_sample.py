from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsVolatilitySampleRequestBodyAssets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilitySampleRequestBody:
    assets: List[PostAssetsVolatilitySampleRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVolatilitySampleRequest:
    request: PostAssetsVolatilitySampleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilitySample200ApplicationJSONAssets:
    asset_volatility: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetVolatility' }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilitySample200ApplicationJSON:
    assets: List[PostAssetsVolatilitySample200ApplicationJSONAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVolatilitySampleResponse:
    content_type: str = field(default=None)
    post_assets_volatility_sample_200_application_json_object: Optional[PostAssetsVolatilitySample200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
