from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchConversationsQueryParams:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    search: str = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchConversationsRequest:
    query_params: SearchConversationsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SearchConversations200ApplicationJSON:
    conversations: Optional[List[shared.Conversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search' }})
    

@dataclass
class SearchConversationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    search_conversations_200_application_json_object: Optional[SearchConversations200ApplicationJSON] = field(default=None)
    
