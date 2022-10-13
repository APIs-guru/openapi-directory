from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class ListInteractionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListInteractionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListInteractionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListInteractionPathParams = field(default=None)
    query_params: ListInteractionQueryParams = field(default=None)
    security: ListInteractionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListInteraction200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListInteraction200ApplicationJSONListInteractionResponse:
    interactions: Optional[List[shared.ProxyV1ServiceSessionInteraction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    meta: Optional[ListInteraction200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListInteractionResponses:
    list_interaction_response: Optional[ListInteraction200ApplicationJSONListInteractionResponse] = field(default=None)
    

@dataclass
class ListInteractionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListInteractionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
