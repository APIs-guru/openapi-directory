from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDatasetAsyncPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDatasetAsyncRequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class UpdateDatasetAsyncSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDatasetAsyncRequest:
    path_params: UpdateDatasetAsyncPathParams = field()
    security: UpdateDatasetAsyncSecurity = field()
    request: Optional[UpdateDatasetAsyncRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UpdateDatasetAsyncResponse:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
