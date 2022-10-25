from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SHORT_CODE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateShortCodePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateShortCodeUpdateShortCodeRequest:
    api_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    sms_fallback_method: Optional[UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    

@dataclass
class UpdateShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateShortCodeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateShortCodePathParams = field(default=None)
    request: Optional[UpdateShortCodeUpdateShortCodeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateShortCodeSecurity = field(default=None)
    

@dataclass
class UpdateShortCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_short_code: Optional[shared.APIV2010AccountShortCode] = field(default=None)
    
