from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetConversationMessagesPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConversationMessagesQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    include_conversation: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'include_conversation', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationMessagesRequest:
    path_params: GetConversationMessagesPathParams = field(default=None)
    query_params: GetConversationMessagesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetConversationMessages200ApplicationJSON:
    conversation: Optional[shared.Conversation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation' }})
    messages: Optional[List[shared.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    

@dataclass
class GetConversationMessagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_conversation_messages_200_application_json_object: Optional[GetConversationMessages200ApplicationJSON] = field(default=None)
    
