from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchVerificationPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVerificationRequest:
    path_params: FetchVerificationPathParams = field()
    security: FetchVerificationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchVerificationResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_verification: Optional[shared.VerifyV2ServiceVerification] = field(default=None)
    
