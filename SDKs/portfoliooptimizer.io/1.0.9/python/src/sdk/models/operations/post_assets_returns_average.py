from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsReturnsAverageRequestBodyAssets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsAverageRequestBody:
    assets: List[PostAssetsReturnsAverageRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsReturnsAverageRequest:
    request: PostAssetsReturnsAverageRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsAverage200ApplicationJSONAssets:
    asset_average_return: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetAverageReturn' }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsAverage200ApplicationJSON:
    assets: List[PostAssetsReturnsAverage200ApplicationJSONAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsReturnsAverageResponse:
    content_type: str = field(default=None)
    post_assets_returns_average_200_application_json_object: Optional[PostAssetsReturnsAverage200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
