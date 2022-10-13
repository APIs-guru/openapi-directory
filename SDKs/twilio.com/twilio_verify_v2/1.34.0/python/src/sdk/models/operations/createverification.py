from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateVerificationPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateVerificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateVerificationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateVerificationSecurity = field(default=None)
    

@dataclass
class CreateVerificationResponses:
    verify_v2_service_verification: Optional[shared.VerifyV2ServiceVerification] = field(default=None)
    

@dataclass
class CreateVerificationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateVerificationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
