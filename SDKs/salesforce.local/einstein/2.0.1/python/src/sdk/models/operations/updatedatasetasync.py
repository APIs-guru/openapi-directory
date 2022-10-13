from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDatasetAsyncPathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDatasetAsyncRequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class UpdateDatasetAsyncSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDatasetAsyncRequest:
    path_params: UpdateDatasetAsyncPathParams = field(default=None)
    request: Optional[UpdateDatasetAsyncRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UpdateDatasetAsyncSecurity = field(default=None)
    

@dataclass
class UpdateDatasetAsyncResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
