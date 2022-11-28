from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_USER_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListUserBindingPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUserBindingQueryParams:
    binding_type: Optional[List[shared.UserBindingEnumBindingTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'BindingType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUserBindingListUserBindingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUserBindingListUserBindingResponse:
    bindings: Optional[List[shared.ChatV2ServiceUserUserBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    meta: Optional[ListUserBindingListUserBindingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListUserBindingRequest:
    path_params: ListUserBindingPathParams = field()
    query_params: ListUserBindingQueryParams = field()
    security: ListUserBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUserBindingResponse:
    content_type: str = field()
    status_code: int = field()
    list_user_binding_response: Optional[ListUserBindingListUserBindingResponse] = field(default=None)
    
