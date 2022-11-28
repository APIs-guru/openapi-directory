from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostMyConversationsConversationIDMessagesPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyConversationsConversationIDMessagesRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class PostMyConversationsConversationIDMessagesSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyConversationsConversationIDMessagesRequest:
    path_params: PostMyConversationsConversationIDMessagesPathParams = field()
    security: PostMyConversationsConversationIDMessagesSecurity = field()
    request: Optional[PostMyConversationsConversationIDMessagesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMyConversationsConversationIDMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    
