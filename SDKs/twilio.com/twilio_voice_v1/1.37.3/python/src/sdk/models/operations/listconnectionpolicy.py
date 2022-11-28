from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CONNECTION_POLICY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListConnectionPolicyQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConnectionPolicySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConnectionPolicyListConnectionPolicyResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListConnectionPolicyListConnectionPolicyResponse:
    connection_policies: Optional[List[shared.VoiceV1ConnectionPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_policies') }})
    meta: Optional[ListConnectionPolicyListConnectionPolicyResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListConnectionPolicyRequest:
    query_params: ListConnectionPolicyQueryParams = field()
    security: ListConnectionPolicySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConnectionPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    list_connection_policy_response: Optional[ListConnectionPolicyListConnectionPolicyResponse] = field(default=None)
    
