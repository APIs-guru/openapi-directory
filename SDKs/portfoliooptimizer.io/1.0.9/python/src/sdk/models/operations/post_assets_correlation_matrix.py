from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixRequestBody1Assets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixRequestBody1:
    assets: List[PostAssetsCorrelationMatrixRequestBody1Assets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrixRequestBody2:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    

@dataclass
class PostAssetsCorrelationMatrixRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsCorrelationMatrix200ApplicationJSON:
    assets_correlation_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCorrelationMatrix' }})
    

@dataclass
class PostAssetsCorrelationMatrixResponse:
    content_type: str = field(default=None)
    post_assets_correlation_matrix_200_application_json_object: Optional[PostAssetsCorrelationMatrix200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
