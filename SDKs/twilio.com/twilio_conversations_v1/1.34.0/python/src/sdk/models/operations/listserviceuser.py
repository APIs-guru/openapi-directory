from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_USER_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceUserPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceUserQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceUserPathParams = field(default=None)
    query_params: ListServiceUserQueryParams = field(default=None)
    security: ListServiceUserSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceUser200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceUser200ApplicationJSONListServiceUserResponse:
    meta: Optional[ListServiceUser200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    users: Optional[List[shared.ConversationsV1ServiceServiceUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class ListServiceUserResponses:
    list_service_user_response: Optional[ListServiceUser200ApplicationJSONListServiceUserResponse] = field(default=None)
    

@dataclass
class ListServiceUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListServiceUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
