from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_TEST_USER_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateTestUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTestUserUpdateTestUserRequest:
    test_users: List[str] = field(default=None, metadata={'form': { 'field_name': 'TestUsers' }})
    

@dataclass
class UpdateTestUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTestUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTestUserPathParams = field(default=None)
    request: Optional[UpdateTestUserUpdateTestUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTestUserSecurity = field(default=None)
    

@dataclass
class UpdateTestUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow_test_user: Optional[shared.StudioV2FlowTestUser] = field(default=None)
    
