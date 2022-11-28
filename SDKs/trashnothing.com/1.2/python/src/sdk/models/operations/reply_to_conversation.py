from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReplyToConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplyToConversationRequestBody:
    content: str = field(metadata={'multipart_form': { 'field_name': 'content' }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'device_pixel_ratio' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    

@dataclass
class ReplyToConversationRequest:
    path_params: ReplyToConversationPathParams = field()
    request: ReplyToConversationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReplyToConversationResponse:
    content_type: str = field()
    status_code: int = field()
    message: Optional[shared.Message] = field(default=None)
    
