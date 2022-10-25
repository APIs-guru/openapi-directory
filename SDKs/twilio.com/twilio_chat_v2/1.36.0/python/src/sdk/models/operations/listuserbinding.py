from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_USER_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListUserBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUserBindingQueryParams:
    binding_type: Optional[List[shared.UserBindingEnumBindingTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'BindingType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUserBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUserBindingPathParams = field(default=None)
    query_params: ListUserBindingQueryParams = field(default=None)
    security: ListUserBindingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUserBindingListUserBindingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUserBindingListUserBindingResponse:
    bindings: Optional[List[shared.ChatV2ServiceUserUserBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    meta: Optional[ListUserBindingListUserBindingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListUserBindingResponse:
    content_type: str = field(default=None)
    list_user_binding_response: Optional[ListUserBindingListUserBindingResponse] = field(default=None)
    status_code: int = field(default=None)
    
