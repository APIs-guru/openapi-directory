from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsVarianceSampleRequestBodyAssets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceSampleRequestBody:
    assets: List[PostAssetsVarianceSampleRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVarianceSampleRequest:
    request: PostAssetsVarianceSampleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceSample200ApplicationJSONAssets:
    asset_variance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetVariance' }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceSample200ApplicationJSON:
    assets: List[PostAssetsVarianceSample200ApplicationJSONAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsVarianceSampleResponse:
    content_type: str = field(default=None)
    post_assets_variance_sample_200_application_json_object: Optional[PostAssetsVarianceSample200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
