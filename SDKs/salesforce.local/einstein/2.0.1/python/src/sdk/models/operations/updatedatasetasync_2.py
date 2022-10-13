from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDatasetAsync2PathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDatasetAsync2RequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    

@dataclass
class UpdateDatasetAsync2Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDatasetAsync2Request:
    path_params: UpdateDatasetAsync2PathParams = field(default=None)
    request: Optional[UpdateDatasetAsync2RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateDatasetAsync2Security = field(default=None)
    

@dataclass
class UpdateDatasetAsync2Response:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
