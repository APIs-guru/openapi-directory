from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class UpdateSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateSimRequestBodyCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimRequestBodyCommandsCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimRequestBodySmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimRequestBodySmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimRequestBodyVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateSimRequestBodyVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateSimRequestBodyUpdateSimRequest:
    account_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    callback_method: Optional[UpdateSimRequestBodyCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    commands_callback_method: Optional[UpdateSimRequestBodyCommandsCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackMethod' }})
    commands_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    rate_plan: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RatePlan' }})
    reset_status: Optional[shared.SimEnumResetStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'ResetStatus' }})
    sms_fallback_method: Optional[UpdateSimRequestBodySmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateSimRequestBodySmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status: Optional[shared.SimEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_fallback_method: Optional[UpdateSimRequestBodyVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateSimRequestBodyVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class UpdateSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSimPathParams = field(default=None)
    request: Optional[UpdateSimRequestBodyUpdateSimRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSimSecurity = field(default=None)
    

@dataclass
class UpdateSimResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wireless_v1_sim: Optional[shared.WirelessV1Sim] = field(default=None)
    
