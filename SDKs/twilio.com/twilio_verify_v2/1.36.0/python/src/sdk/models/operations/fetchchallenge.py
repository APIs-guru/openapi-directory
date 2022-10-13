from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchChallengePathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchChallengeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchChallengeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchChallengePathParams = field(default=None)
    security: FetchChallengeSecurity = field(default=None)
    

@dataclass
class FetchChallengeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_entity_challenge: Optional[shared.VerifyV2ServiceEntityChallenge] = field(default=None)
    
