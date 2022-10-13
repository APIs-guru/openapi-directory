from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostMyConversationsConversationIDMessagesPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyConversationsConversationIDMessagesRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

@dataclass
class PostMyConversationsConversationIDMessagesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyConversationsConversationIDMessagesRequest:
    path_params: PostMyConversationsConversationIDMessagesPathParams = field(default=None)
    request: Optional[PostMyConversationsConversationIDMessagesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMyConversationsConversationIDMessagesSecurity = field(default=None)
    

@dataclass
class PostMyConversationsConversationIDMessagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
