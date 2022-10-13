from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateVerificationPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVerificationRequestBodyUpdateVerificationRequest:
    status: shared.VerificationEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateVerificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateVerificationPathParams = field(default=None)
    request: Optional[UpdateVerificationRequestBodyUpdateVerificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateVerificationSecurity = field(default=None)
    

@dataclass
class UpdateVerificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_verification: Optional[shared.VerifyV2ServiceVerification] = field(default=None)
    
