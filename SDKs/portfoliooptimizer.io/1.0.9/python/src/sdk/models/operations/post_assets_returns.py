from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsReturnsRequestBodyAssets:
    asset_prices: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetPrices' }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsRequestBody:
    assets: List[PostAssetsReturnsRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsReturnsRequest:
    request: PostAssetsReturnsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsReturns200ApplicationJSONAssets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsReturns200ApplicationJSON:
    assets: List[PostAssetsReturns200ApplicationJSONAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsReturnsResponse:
    content_type: str = field(default=None)
    post_assets_returns_200_application_json_object: Optional[PostAssetsReturns200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
