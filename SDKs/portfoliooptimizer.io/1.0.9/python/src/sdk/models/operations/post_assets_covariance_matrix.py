from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody1Assets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody1:
    assets: List[PostAssetsCovarianceMatrixRequestBody1Assets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody2:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    assets_variances: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsVariances' }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixRequestBody3:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    assets_volatilities: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsVolatilities' }})
    

@dataclass
class PostAssetsCovarianceMatrixRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrix200ApplicationJSON:
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    

@dataclass
class PostAssetsCovarianceMatrixResponse:
    content_type: str = field(default=None)
    post_assets_covariance_matrix_200_application_json_object: Optional[PostAssetsCovarianceMatrix200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
