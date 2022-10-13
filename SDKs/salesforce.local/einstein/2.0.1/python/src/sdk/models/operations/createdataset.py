from dataclasses import dataclass, field
from typing import Enum,Optional
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
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateDatasetRequest:
    request: Optional[CreateDatasetRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: CreateDatasetSecurity = field(default=None)
    

@dataclass
class CreateDatasetResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
