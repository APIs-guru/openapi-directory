from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsReturnsRequestBodyAssets:
    asset_prices: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPrices') }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsRequestBody:
    assets: List[PostAssetsReturnsRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsReturns200ApplicationJSONAssets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsReturns200ApplicationJSON:
    assets: List[PostAssetsReturns200ApplicationJSONAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass
class PostAssetsReturnsRequest:
    request: PostAssetsReturnsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsReturnsResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_returns_200_application_json_object: Optional[PostAssetsReturns200ApplicationJSON] = field(default=None)
    
