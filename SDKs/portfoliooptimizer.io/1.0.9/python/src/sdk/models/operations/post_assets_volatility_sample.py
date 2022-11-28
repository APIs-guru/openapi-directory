from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsVolatilitySampleRequestBodyAssets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilitySampleRequestBody:
    assets: List[PostAssetsVolatilitySampleRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilitySample200ApplicationJSONAssets:
    asset_volatility: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVolatility') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilitySample200ApplicationJSON:
    assets: List[PostAssetsVolatilitySample200ApplicationJSONAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass
class PostAssetsVolatilitySampleRequest:
    request: PostAssetsVolatilitySampleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsVolatilitySampleResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_volatility_sample_200_application_json_object: Optional[PostAssetsVolatilitySample200ApplicationJSON] = field(default=None)
    
