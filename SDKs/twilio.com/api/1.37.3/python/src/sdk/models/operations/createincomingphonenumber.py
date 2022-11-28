from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateIncomingPhoneNumberPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest:
    address_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    api_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    area_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AreaCode' }})
    bundle_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BundleSid' }})
    emergency_address_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EmergencyAddressSid' }})
    emergency_status: Optional[shared.IncomingPhoneNumberEnumEmergencyStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'EmergencyStatus' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IdentitySid' }})
    phone_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    sms_application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trunk_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TrunkSid' }})
    voice_application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceApplicationSid' }})
    voice_caller_id_lookup: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'VoiceCallerIdLookup' }})
    voice_fallback_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_receive_mode: Optional[shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceReceiveMode' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class CreateIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIncomingPhoneNumberRequest:
    path_params: CreateIncomingPhoneNumberPathParams = field()
    security: CreateIncomingPhoneNumberSecurity = field()
    request: Optional[CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_incoming_phone_number: Optional[shared.APIV2010AccountIncomingPhoneNumber] = field(default=None)
    
