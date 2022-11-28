from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceRolePathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceRoleQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListServiceRoleListServiceRoleResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListServiceRoleListServiceRoleResponse:
    meta: Optional[ListServiceRoleListServiceRoleResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    roles: Optional[List[shared.ConversationsV1ServiceServiceRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

@dataclass
class ListServiceRoleRequest:
    path_params: ListServiceRolePathParams = field()
    query_params: ListServiceRoleQueryParams = field()
    security: ListServiceRoleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListServiceRoleResponse:
    content_type: str = field()
    status_code: int = field()
    list_service_role_response: Optional[ListServiceRoleListServiceRoleResponse] = field(default=None)
    
