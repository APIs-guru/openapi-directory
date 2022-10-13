from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_END_USER_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchEndUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEndUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEndUserPathParams = field(default=None)
    security: FetchEndUserSecurity = field(default=None)
    

@dataclass
class FetchEndUserResponses:
    trusthub_v1_end_user: Optional[shared.TrusthubV1EndUser] = field(default=None)
    

@dataclass
class FetchEndUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchEndUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
