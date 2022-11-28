from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixRequestBody1Assets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixRequestBody1:
    assets: List[PostAssetsCorrelationMatrixRequestBody1Assets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixRequestBody2:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrix200ApplicationJSON:
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    

@dataclass
class PostAssetsCorrelationMatrixRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsCorrelationMatrixResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_correlation_matrix_200_application_json_object: Optional[PostAssetsCorrelationMatrix200ApplicationJSON] = field(default=None)
    
