from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListChallengePathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListChallengeQueryParams:
    factor_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FactorSid', 'style': 'form', 'explode': True }})
    order: Optional[shared.ChallengeEnumListOrdersEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.ChallengeEnumChallengeStatusesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChallengeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListChallengeListChallengeResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListChallengeListChallengeResponse:
    challenges: Optional[List[shared.VerifyV2ServiceEntityChallenge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenges') }})
    meta: Optional[ListChallengeListChallengeResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListChallengeRequest:
    path_params: ListChallengePathParams = field()
    query_params: ListChallengeQueryParams = field()
    security: ListChallengeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListChallengeResponse:
    content_type: str = field()
    status_code: int = field()
    list_challenge_response: Optional[ListChallengeListChallengeResponse] = field(default=None)
    
