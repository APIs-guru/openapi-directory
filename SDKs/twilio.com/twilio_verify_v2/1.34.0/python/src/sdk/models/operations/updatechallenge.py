from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateChallengePathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChallengeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChallengeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateChallengePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateChallengeSecurity = field(default=None)
    

@dataclass
class UpdateChallengeResponses:
    verify_v2_service_entity_challenge: Optional[shared.VerifyV2ServiceEntityChallenge] = field(default=None)
    

@dataclass
class UpdateChallengeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateChallengeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
