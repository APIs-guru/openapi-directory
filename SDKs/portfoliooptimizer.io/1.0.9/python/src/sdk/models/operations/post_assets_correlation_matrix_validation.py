from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixValidationRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    
class PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum(str, Enum):
    VALID_CORRELATION_MATRIX = "valid correlation matrix"
    INVALID_CORRELATION_MATRIX_NON_SYMMETRIC_MATRIX = "invalid correlation matrix - non symmetric matrix"
    INVALID_CORRELATION_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS = "invalid correlation matrix - non positive diagonal elements"
    INVALID_CORRELATION_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX = "invalid correlation matrix - non positive semi-definite matrix"


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixValidation200ApplicationJSON:
    message: PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostAssetsCorrelationMatrixValidationRequest:
    request: PostAssetsCorrelationMatrixValidationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsCorrelationMatrixValidationResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_correlation_matrix_validation_200_application_json_object: Optional[PostAssetsCorrelationMatrixValidation200ApplicationJSON] = field(default=None)
    
