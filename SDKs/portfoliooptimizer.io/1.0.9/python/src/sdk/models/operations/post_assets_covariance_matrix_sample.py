from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixSampleRequestBodyAssets:
    asset_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetReturns' }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixSampleRequestBody:
    assets: List[PostAssetsCovarianceMatrixSampleRequestBodyAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    

@dataclass
class PostAssetsCovarianceMatrixSampleRequest:
    request: PostAssetsCovarianceMatrixSampleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixSample200ApplicationJSON:
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    

@dataclass
class PostAssetsCovarianceMatrixSampleResponse:
    content_type: str = field(default=None)
    post_assets_covariance_matrix_sample_200_application_json_object: Optional[PostAssetsCovarianceMatrixSample200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
