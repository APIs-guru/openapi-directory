from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateWirelessSimPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateWirelessSimUpdateWirelessSimRequest:
    callback_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    commands_callback_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackMethod' }})
    commands_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommandsCallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    rate_plan: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RatePlan' }})
    sms_fallback_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_fallback_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class UpdateWirelessSimSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWirelessSimRequest:
    path_params: UpdateWirelessSimPathParams = field()
    security: UpdateWirelessSimSecurity = field()
    request: Optional[UpdateWirelessSimUpdateWirelessSimRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateWirelessSimResponse:
    content_type: str = field()
    status_code: int = field()
    preview_wireless_sim: Optional[shared.PreviewWirelessSim] = field(default=None)
    
