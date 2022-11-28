from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody1Assets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody1:
    assets: List[PostAssetsCovarianceMatrixRequestBody1Assets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody2:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    assets_variances: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVariances') }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody3:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    assets_volatilities: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVolatilities') }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrix200ApplicationJSON:
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass
class PostAssetsCovarianceMatrixRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsCovarianceMatrixResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_covariance_matrix_200_application_json_object: Optional[PostAssetsCovarianceMatrix200ApplicationJSON] = field(default=None)
    
