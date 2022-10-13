from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TEST_USER_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchTestUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTestUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTestUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTestUserPathParams = field(default=None)
    security: FetchTestUserSecurity = field(default=None)
    

@dataclass
class FetchTestUserResponses:
    studio_v2_flow_test_user: Optional[shared.StudioV2FlowTestUser] = field(default=None)
    

@dataclass
class FetchTestUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTestUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
