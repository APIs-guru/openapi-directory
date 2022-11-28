from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TOLLFREE_VERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchTollfreeVerificationPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTollfreeVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTollfreeVerificationRequest:
    path_params: FetchTollfreeVerificationPathParams = field()
    security: FetchTollfreeVerificationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTollfreeVerificationResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_tollfree_verification: Optional[shared.MessagingV1TollfreeVerification] = field(default=None)
    
