from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetConversationsQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    include_num_unread: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'include_num_unread', 'style': 'form', 'explode': True }})
    num_messages: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'num_messages', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationsRequest:
    query_params: GetConversationsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetConversations200ApplicationJSON:
    conversations: Optional[List[shared.Conversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    num_unread: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_unread' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    

@dataclass
class GetConversationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_conversations_200_application_json_object: Optional[GetConversations200ApplicationJSON] = field(default=None)
    
