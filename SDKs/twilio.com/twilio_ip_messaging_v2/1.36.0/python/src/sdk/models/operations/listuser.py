from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_USER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class ListUserPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUserQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUserPathParams = field(default=None)
    query_params: ListUserQueryParams = field(default=None)
    security: ListUserSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUserListUserResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUserListUserResponse:
    meta: Optional[ListUserListUserResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    users: Optional[List[shared.IPMessagingV2ServiceUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class ListUserResponse:
    content_type: str = field(default=None)
    list_user_response: Optional[ListUserListUserResponse] = field(default=None)
    status_code: int = field(default=None)
    
