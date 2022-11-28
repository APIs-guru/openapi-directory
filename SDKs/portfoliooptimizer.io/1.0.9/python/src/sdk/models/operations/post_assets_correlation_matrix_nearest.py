from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixNearestRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_approximate_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsApproximateCorrelationMatrix') }})
    assets_fixed_correlations: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsFixedCorrelations') }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixNearest200ApplicationJSON:
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    

@dataclass
class PostAssetsCorrelationMatrixNearestRequest:
    request: PostAssetsCorrelationMatrixNearestRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsCorrelationMatrixNearestResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_correlation_matrix_nearest_200_application_json_object: Optional[PostAssetsCorrelationMatrixNearest200ApplicationJSON] = field(default=None)
    
