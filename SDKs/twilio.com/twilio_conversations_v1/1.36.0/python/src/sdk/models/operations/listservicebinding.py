from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_BINDING_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceBindingPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceBindingQueryParams:
    binding_type: Optional[List[shared.ServiceBindingEnumBindingTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'BindingType', 'style': 'form', 'explode': True }})
    identity: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceBindingPathParams = field(default=None)
    query_params: ListServiceBindingQueryParams = field(default=None)
    security: ListServiceBindingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceBinding200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceBinding200ApplicationJSONListServiceBindingResponse:
    bindings: Optional[List[shared.ConversationsV1ServiceServiceBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    meta: Optional[ListServiceBinding200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListServiceBindingResponse:
    content_type: str = field(default=None)
    list_service_binding_response: Optional[ListServiceBinding200ApplicationJSONListServiceBindingResponse] = field(default=None)
    status_code: int = field(default=None)
    
