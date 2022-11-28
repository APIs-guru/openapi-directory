from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListConnectionPolicyTargetPathParams:
    connection_policy_sid: str = field(metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConnectionPolicyTargetQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListConnectionPolicyTargetListConnectionPolicyTargetResponse:
    meta: Optional[ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    targets: Optional[List[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass
class ListConnectionPolicyTargetRequest:
    path_params: ListConnectionPolicyTargetPathParams = field()
    query_params: ListConnectionPolicyTargetQueryParams = field()
    security: ListConnectionPolicyTargetSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConnectionPolicyTargetResponse:
    content_type: str = field()
    status_code: int = field()
    list_connection_policy_target_response: Optional[ListConnectionPolicyTargetListConnectionPolicyTargetResponse] = field(default=None)
    
