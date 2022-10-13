from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListConnectionPolicyTargetPathParams:
    connection_policy_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConnectionPolicyTargetQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListConnectionPolicyTargetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListConnectionPolicyTargetPathParams = field(default=None)
    query_params: ListConnectionPolicyTargetQueryParams = field(default=None)
    security: ListConnectionPolicyTargetSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListConnectionPolicyTarget200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListConnectionPolicyTarget200ApplicationJSONListConnectionPolicyTargetResponse:
    meta: Optional[ListConnectionPolicyTarget200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    targets: Optional[List[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass
class ListConnectionPolicyTargetResponse:
    content_type: str = field(default=None)
    list_connection_policy_target_response: Optional[ListConnectionPolicyTarget200ApplicationJSONListConnectionPolicyTargetResponse] = field(default=None)
    status_code: int = field(default=None)
    
