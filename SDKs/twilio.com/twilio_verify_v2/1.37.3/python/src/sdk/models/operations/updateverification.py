from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateVerificationPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVerificationUpdateVerificationRequest:
    status: shared.VerificationEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateVerificationRequest:
    path_params: UpdateVerificationPathParams = field()
    security: UpdateVerificationSecurity = field()
    request: Optional[UpdateVerificationUpdateVerificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateVerificationResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_verification: Optional[shared.VerifyV2ServiceVerification] = field(default=None)
    
