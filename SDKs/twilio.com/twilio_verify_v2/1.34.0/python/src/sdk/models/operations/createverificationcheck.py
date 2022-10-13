from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_VERIFICATION_CHECK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateVerificationCheckPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVerificationCheckSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateVerificationCheckRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateVerificationCheckPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateVerificationCheckSecurity = field(default=None)
    

@dataclass
class CreateVerificationCheckResponses:
    verify_v2_service_verification_check: Optional[shared.VerifyV2ServiceVerificationCheck] = field(default=None)
    

@dataclass
class CreateVerificationCheckResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateVerificationCheckResponses]] = field(default=None)
    status_code: int = field(default=None)
    
