from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostTransactionsIDAttachmentsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostTransactionsIDAttachmentsRequestBody:
    attachment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment_id' }})
    

@dataclass
class PostTransactionsIDAttachmentsRequest:
    path_params: PostTransactionsIDAttachmentsPathParams = field(default=None)
    request: Optional[PostTransactionsIDAttachmentsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransactionsIDAttachmentsResponse:
    attachment: Optional[shared.Attachment] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
