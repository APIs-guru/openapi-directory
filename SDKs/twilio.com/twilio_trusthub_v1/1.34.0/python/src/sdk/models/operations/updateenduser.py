from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_END_USER_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class UpdateEndUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateEndUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateEndUserPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateEndUserSecurity = field(default=None)
    

@dataclass
class UpdateEndUserResponses:
    trusthub_v1_end_user: Optional[shared.TrusthubV1EndUser] = field(default=None)
    

@dataclass
class UpdateEndUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateEndUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
