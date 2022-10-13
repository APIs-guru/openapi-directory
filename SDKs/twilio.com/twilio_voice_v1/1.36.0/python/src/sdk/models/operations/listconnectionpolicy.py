from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListConnectionPolicyQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListConnectionPolicyRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListConnectionPolicyQueryParams = field(default=None)
    security: ListConnectionPolicySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListConnectionPolicy200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListConnectionPolicy200ApplicationJSONListConnectionPolicyResponse:
    connection_policies: Optional[List[shared.VoiceV1ConnectionPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_policies' }})
    meta: Optional[ListConnectionPolicy200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListConnectionPolicyResponse:
    content_type: str = field(default=None)
    list_connection_policy_response: Optional[ListConnectionPolicy200ApplicationJSONListConnectionPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
