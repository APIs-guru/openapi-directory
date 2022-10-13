from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostUsersIDAttachmentsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostUsersIDAttachmentsRequestBody:
    file_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_data' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_name' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PostUsersIDAttachmentsRequest:
    path_params: PostUsersIDAttachmentsPathParams = field(default=None)
    request: Optional[PostUsersIDAttachmentsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersIDAttachmentsResponse:
    attachment: Optional[shared.Attachment] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
