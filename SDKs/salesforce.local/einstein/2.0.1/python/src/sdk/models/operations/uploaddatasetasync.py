from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class UploadDatasetAsyncRequestBodyTypeEnum(str, Enum):
    TEXT_INTENT = "text-intent"
    TEXT_SENTIMENT = "text-sentiment"


@dataclass
class UploadDatasetAsyncRequestBody:
    data: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    type: Optional[UploadDatasetAsyncRequestBodyTypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class UploadDatasetAsyncSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UploadDatasetAsyncRequest:
    request: Optional[UploadDatasetAsyncRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadDatasetAsyncSecurity = field(default=None)
    

@dataclass
class UploadDatasetAsyncResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
