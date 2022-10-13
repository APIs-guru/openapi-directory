from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum(str, Enum):
    MINIMUM_EQUICORRELATION_MATRIX = "minimumEquicorrelationMatrix"
    ZERO_EQUICORRELATION_MATRIX = "zeroEquicorrelationMatrix"
    MAXIMUM_EQUICORRELATION_MATRIX = "maximumEquicorrelationMatrix"


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixShrinkageRequestBody1:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    shrinkage_factor: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shrinkageFactor' }})
    shrinkage_target: PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shrinkageTarget' }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixShrinkageRequestBody2:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    shrinkage_factor: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shrinkageFactor' }})
    shrinkage_target_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shrinkageTargetCorrelationMatrix' }})
    

@dataclass
class PostAssetsCorrelationMatrixShrinkageRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixShrinkage200ApplicationJSON:
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    

@dataclass
class PostAssetsCorrelationMatrixShrinkageResponse:
    content_type: str = field(default=None)
    post_assets_correlation_matrix_shrinkage_200_application_json_object: Optional[PostAssetsCorrelationMatrixShrinkage200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
