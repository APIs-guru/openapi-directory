from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBindingQueryParams:
    binding_type: Optional[List[shared.BindingEnumBindingTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'BindingType', 'style': 'form', 'explode': True }})
    identity: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListBindingPathParams = field(default=None)
    query_params: ListBindingQueryParams = field(default=None)
    security: ListBindingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListBindingListBindingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListBindingListBindingResponse:
    bindings: Optional[List[shared.ChatV2ServiceBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    meta: Optional[ListBindingListBindingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListBindingResponse:
    content_type: str = field(default=None)
    list_binding_response: Optional[ListBindingListBindingResponse] = field(default=None)
    status_code: int = field(default=None)
    
