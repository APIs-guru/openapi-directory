from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixValidationRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    

@dataclass
class PostAssetsCovarianceMatrixValidationRequest:
    request: PostAssetsCovarianceMatrixValidationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum(str, Enum):
    VALID_COVARIANCE_MATRIX = "valid covariance matrix"
    INVALID_COVARIANCE_MATRIX_NON_SYMMETRIC_MATRIX = "invalid covariance matrix - non symmetric matrix"
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS = "invalid covariance matrix - non positive diagonal elements"
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX = "invalid covariance matrix - non positive semi-definite matrix"


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixValidation200ApplicationJSON:
    message: PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostAssetsCovarianceMatrixValidationResponse:
    content_type: str = field(default=None)
    post_assets_covariance_matrix_validation_200_application_json_object: Optional[PostAssetsCovarianceMatrixValidation200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
