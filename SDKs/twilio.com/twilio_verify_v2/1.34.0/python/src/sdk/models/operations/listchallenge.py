from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListChallengePathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListChallengeQueryParams:
    factor_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FactorSid', 'style': 'form', 'explode': True }})
    order: Optional[shared.ChallengeEnumListOrdersEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.ChallengeEnumChallengeStatusesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChallengeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListChallengeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListChallengePathParams = field(default=None)
    query_params: ListChallengeQueryParams = field(default=None)
    security: ListChallengeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListChallenge200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListChallenge200ApplicationJSONListChallengeResponse:
    challenges: Optional[List[shared.VerifyV2ServiceEntityChallenge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenges' }})
    meta: Optional[ListChallenge200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListChallengeResponses:
    list_challenge_response: Optional[ListChallenge200ApplicationJSONListChallengeResponse] = field(default=None)
    

@dataclass
class ListChallengeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListChallengeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
