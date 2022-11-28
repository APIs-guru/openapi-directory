from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixSampleRequestBodyAssets:
    asset_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixSampleRequestBody:
    assets: List[PostAssetsCovarianceMatrixSampleRequestBodyAssets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclass
class PostAssetsCovarianceMatrixSample200ApplicationJSON:
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass
class PostAssetsCovarianceMatrixSampleRequest:
    request: PostAssetsCovarianceMatrixSampleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssetsCovarianceMatrixSampleResponse:
    content_type: str = field()
    status_code: int = field()
    post_assets_covariance_matrix_sample_200_application_json_object: Optional[PostAssetsCovarianceMatrixSample200ApplicationJSON] = field(default=None)
    
