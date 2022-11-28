from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_VERIFICATION_ATTEMPT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchVerificationAttemptPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVerificationAttemptSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVerificationAttemptRequest:
    path_params: FetchVerificationAttemptPathParams = field()
    security: FetchVerificationAttemptSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchVerificationAttemptResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_verification_attempt: Optional[shared.VerifyV2VerificationAttempt] = field(default=None)
    
