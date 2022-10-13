from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixValidationRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    

@dataclass
class PostAssetsCorrelationMatrixValidationRequest:
    request: PostAssetsCorrelationMatrixValidationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum(str, Enum):
    VALID_CORRELATION_MATRIX = "valid correlation matrix"
    INVALID_CORRELATION_MATRIX_NON_SYMMETRIC_MATRIX = "invalid correlation matrix - non symmetric matrix"
    INVALID_CORRELATION_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS = "invalid correlation matrix - non positive diagonal elements"
    INVALID_CORRELATION_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX = "invalid correlation matrix - non positive semi-definite matrix"


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixValidation200ApplicationJSON:
    message: PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostAssetsCorrelationMatrixValidationResponse:
    content_type: str = field(default=None)
    post_assets_correlation_matrix_validation_200_application_json_object: Optional[PostAssetsCorrelationMatrixValidation200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
