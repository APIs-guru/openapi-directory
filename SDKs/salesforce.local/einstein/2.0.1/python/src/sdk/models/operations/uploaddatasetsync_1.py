from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class UploadDatasetSync1RequestBodyTypeEnum(str, Enum):
    IMAGE = "image"
    IMAGE_DETECTION = "image-detection"
    IMAGE_MULTI_LABEL = "image-multi-label"


@dataclass
class UploadDatasetSync1RequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    type: Optional[UploadDatasetSync1RequestBodyTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class UploadDatasetSync1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UploadDatasetSync1Request:
    security: UploadDatasetSync1Security = field()
    request: Optional[UploadDatasetSync1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadDatasetSync1Response:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
