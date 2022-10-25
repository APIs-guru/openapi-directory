from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class ListRolePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRoleQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListRolePathParams = field(default=None)
    query_params: ListRoleQueryParams = field(default=None)
    security: ListRoleSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListRoleListRoleResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListRoleListRoleResponse:
    meta: Optional[ListRoleListRoleResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    roles: Optional[List[shared.IPMessagingV1ServiceRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    

@dataclass
class ListRoleResponse:
    content_type: str = field(default=None)
    list_role_response: Optional[ListRoleListRoleResponse] = field(default=None)
    status_code: int = field(default=None)
    
