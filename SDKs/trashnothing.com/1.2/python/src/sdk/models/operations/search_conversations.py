from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SearchConversationsQueryParams:
    search: str = field(metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SearchConversations200ApplicationJSON:
    conversations: Optional[List[shared.Conversation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search') }})
    

@dataclass
class SearchConversationsRequest:
    query_params: SearchConversationsQueryParams = field()
    

@dataclass
class SearchConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    search_conversations_200_application_json_object: Optional[SearchConversations200ApplicationJSON] = field(default=None)
    
