from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody1Assets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody1:
    assets: List[PostAssetsVolatilityRequestBody1Assets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody2:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody3Assets:
    asset_variance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVariance') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatilityRequestBody3:
    assets: List[PostAssetsVolatilityRequestBody3Assets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatility200ApplicationJSONAssets:
    asset_volatility: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVolatility') }})
    

@dataclass_json
@dataclass
class PostAssetsVolatility200ApplicationJSON:
    assets: List[PostAssetsVolatility200ApplicationJSONAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass
class PostAssetsVolatilityRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsVolatilityResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_volatility_200_application_json_object: Optional[PostAssetsVolatility200ApplicationJSON] = field(default=None)
    
