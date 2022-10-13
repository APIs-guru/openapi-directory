from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class UploadDatasetAsync1RequestBodyTypeEnum(str, Enum):
    IMAGE = "image"
    IMAGE_DETECTION = "image-detection"
    IMAGE_MULTI_LABEL = "image-multi-label"


@dataclass
class UploadDatasetAsync1RequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    type: Optional[UploadDatasetAsync1RequestBodyTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class UploadDatasetAsync1Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UploadDatasetAsync1Request:
    request: Optional[UploadDatasetAsync1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadDatasetAsync1Security = field(default=None)
    

@dataclass
class UploadDatasetAsync1Response:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
