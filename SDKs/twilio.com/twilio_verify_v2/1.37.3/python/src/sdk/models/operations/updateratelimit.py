from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateRateLimitPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRateLimitUpdateRateLimitRequest:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    

@dataclass
class UpdateRateLimitSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRateLimitRequest:
    path_params: UpdateRateLimitPathParams = field()
    security: UpdateRateLimitSecurity = field()
    request: Optional[UpdateRateLimitUpdateRateLimitRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRateLimitResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_rate_limit: Optional[shared.VerifyV2ServiceRateLimit] = field(default=None)
    
