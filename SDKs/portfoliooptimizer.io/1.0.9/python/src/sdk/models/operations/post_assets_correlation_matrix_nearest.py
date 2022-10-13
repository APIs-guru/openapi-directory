from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixNearestRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_approximate_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsApproximateCorrelationMatrix' }})
    assets_fixed_correlations: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsFixedCorrelations' }})
    

@dataclass
class PostAssetsCorrelationMatrixNearestRequest:
    request: PostAssetsCorrelationMatrixNearestRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixNearest200ApplicationJSON:
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    

@dataclass
class PostAssetsCorrelationMatrixNearestResponse:
    content_type: str = field(default=None)
    post_assets_correlation_matrix_nearest_200_application_json_object: Optional[PostAssetsCorrelationMatrixNearest200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
