from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReplyToConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplyToConversationRequestBody:
    content: str = field(default=None, metadata={'multipart_form': { 'field_name': 'content' }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'device_pixel_ratio' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    

@dataclass
class ReplyToConversationRequest:
    path_params: ReplyToConversationPathParams = field(default=None)
    request: ReplyToConversationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReplyToConversationResponse:
    content_type: str = field(default=None)
    message: Optional[shared.Message] = field(default=None)
    status_code: int = field(default=None)
    
