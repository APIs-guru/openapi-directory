from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum(str, Enum):
    MINIMUM_EQUICORRELATION_MATRIX = "minimumEquicorrelationMatrix"
    ZERO_EQUICORRELATION_MATRIX = "zeroEquicorrelationMatrix"
    MAXIMUM_EQUICORRELATION_MATRIX = "maximumEquicorrelationMatrix"


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixShrinkageRequestBody1:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    shrinkage_factor: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageFactor') }})
    shrinkage_target: PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageTarget') }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixShrinkageRequestBody2:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    shrinkage_factor: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageFactor') }})
    shrinkage_target_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageTargetCorrelationMatrix') }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixShrinkage200ApplicationJSON:
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    

@dataclass
class PostAssetsCorrelationMatrixShrinkageRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsCorrelationMatrixShrinkageResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_correlation_matrix_shrinkage_200_application_json_object: Optional[PostAssetsCorrelationMatrixShrinkage200ApplicationJSON] = field(default=None)
    
