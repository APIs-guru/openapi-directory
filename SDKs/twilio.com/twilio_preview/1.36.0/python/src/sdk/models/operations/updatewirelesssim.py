from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateWirelessSimPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimRequestBodySmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimRequestBodySmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimRequestBodyVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateWirelessSimRequestBodyUpdateWirelessSimRequest:
    callback_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    commands_callback_method: Optional[UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackMethod' }})
    commands_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    rate_plan: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RatePlan' }})
    sms_fallback_method: Optional[UpdateWirelessSimRequestBodySmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateWirelessSimRequestBodySmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_fallback_method: Optional[UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateWirelessSimRequestBodyVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class UpdateWirelessSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWirelessSimRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWirelessSimPathParams = field(default=None)
    request: Optional[UpdateWirelessSimRequestBodyUpdateWirelessSimRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWirelessSimSecurity = field(default=None)
    

@dataclass
class UpdateWirelessSimResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_wireless_sim: Optional[shared.PreviewWirelessSim] = field(default=None)
    
