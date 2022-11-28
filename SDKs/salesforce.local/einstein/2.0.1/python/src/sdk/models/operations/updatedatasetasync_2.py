from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDatasetAsync2PathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDatasetAsync2RequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    

@dataclass
class UpdateDatasetAsync2Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDatasetAsync2Request:
    path_params: UpdateDatasetAsync2PathParams = field()
    security: UpdateDatasetAsync2Security = field()
    request: Optional[UpdateDatasetAsync2RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UpdateDatasetAsync2Response:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
