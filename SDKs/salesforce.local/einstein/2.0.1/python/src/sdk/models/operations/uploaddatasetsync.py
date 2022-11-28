from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class UploadDatasetSyncRequestBodyTypeEnum(str, Enum):
    TEXT_INTENT = "text-intent"
    TEXT_SENTIMENT = "text-sentiment"


@dataclass
class UploadDatasetSyncRequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    type: Optional[UploadDatasetSyncRequestBodyTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class UploadDatasetSyncSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UploadDatasetSyncRequest:
    security: UploadDatasetSyncSecurity = field()
    request: Optional[UploadDatasetSyncRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadDatasetSyncResponse:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
