from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsVarianceSampleRequestBodyAssets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceSampleRequestBody:
    assets: List[PostAssetsVarianceSampleRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceSample200ApplicationJSONAssets:
    asset_variance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVariance') }})
    

@dataclass_json
@dataclass
class PostAssetsVarianceSample200ApplicationJSON:
    assets: List[PostAssetsVarianceSample200ApplicationJSONAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass
class PostAssetsVarianceSampleRequest:
    request: PostAssetsVarianceSampleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsVarianceSampleResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_variance_sample_200_application_json_object: Optional[PostAssetsVarianceSample200ApplicationJSON] = field(default=None)
    
