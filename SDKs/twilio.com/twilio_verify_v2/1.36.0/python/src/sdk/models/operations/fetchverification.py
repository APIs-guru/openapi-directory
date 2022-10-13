from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchVerificationPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchVerificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchVerificationPathParams = field(default=None)
    security: FetchVerificationSecurity = field(default=None)
    

@dataclass
class FetchVerificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_verification: Optional[shared.VerifyV2ServiceVerification] = field(default=None)
    
