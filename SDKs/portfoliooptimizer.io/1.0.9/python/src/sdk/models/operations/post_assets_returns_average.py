from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsReturnsAverageRequestBodyAssets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsAverageRequestBody:
    assets: List[PostAssetsReturnsAverageRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsAverage200ApplicationJSONAssets:
    asset_average_return: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetAverageReturn') }})
    

@dataclass_json
@dataclass
class PostAssetsReturnsAverage200ApplicationJSON:
    assets: List[PostAssetsReturnsAverage200ApplicationJSONAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass
class PostAssetsReturnsAverageRequest:
    request: PostAssetsReturnsAverageRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsReturnsAverageResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_returns_average_200_application_json_object: Optional[PostAssetsReturnsAverage200ApplicationJSON] = field(default=None)
    
