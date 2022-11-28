from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class CreateDatasetRequestBodyTypeEnum(str, Enum):
    IMAGE = "image"
    IMAGE_MULTI_LABEL = "image-multi-label"


@dataclass
class CreateDatasetRequestBody:
    labels: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    type: Optional[CreateDatasetRequestBodyTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class CreateDatasetSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateDatasetRequest:
    security: CreateDatasetSecurity = field()
    request: Optional[CreateDatasetRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class CreateDatasetResponse:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
