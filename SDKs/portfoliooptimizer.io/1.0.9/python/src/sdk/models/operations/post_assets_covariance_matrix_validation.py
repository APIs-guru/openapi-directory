from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixValidationRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    
class PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum(str, Enum):
    VALID_COVARIANCE_MATRIX = "valid covariance matrix"
    INVALID_COVARIANCE_MATRIX_NON_SYMMETRIC_MATRIX = "invalid covariance matrix - non symmetric matrix"
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS = "invalid covariance matrix - non positive diagonal elements"
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX = "invalid covariance matrix - non positive semi-definite matrix"


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixValidation200ApplicationJSON:
    message: PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostAssetsCovarianceMatrixValidationRequest:
    request: PostAssetsCovarianceMatrixValidationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsCovarianceMatrixValidationResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_covariance_matrix_validation_200_application_json_object: Optional[PostAssetsCovarianceMatrixValidation200ApplicationJSON] = field(default=None)
    
