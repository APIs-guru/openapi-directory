from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TEST_USER_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateTestUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTestUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTestUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTestUserPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTestUserSecurity = field(default=None)
    

@dataclass
class UpdateTestUserResponses:
    studio_v2_flow_test_user: Optional[shared.StudioV2FlowTestUser] = field(default=None)
    

@dataclass
class UpdateTestUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateTestUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
