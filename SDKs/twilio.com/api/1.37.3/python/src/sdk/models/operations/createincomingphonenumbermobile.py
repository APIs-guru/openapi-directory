from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_INCOMING_PHONE_NUMBER_MOBILE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateIncomingPhoneNumberMobilePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest:
    phone_number: str = field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    address_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    api_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    bundle_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BundleSid' }})
    emergency_address_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EmergencyAddressSid' }})
    emergency_status: Optional[shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'EmergencyStatus' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identity_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IdentitySid' }})
    sms_application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsApplicationSid' }})
    sms_fallback_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trunk_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TrunkSid' }})
    voice_application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceApplicationSid' }})
    voice_caller_id_lookup: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'VoiceCallerIdLookup' }})
    voice_fallback_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_receive_mode: Optional[shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceReceiveMode' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class CreateIncomingPhoneNumberMobileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIncomingPhoneNumberMobileRequest:
    path_params: CreateIncomingPhoneNumberMobilePathParams = field()
    security: CreateIncomingPhoneNumberMobileSecurity = field()
    request: Optional[CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberMobileResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_incoming_phone_number_incoming_phone_number_mobile: Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile] = field(default=None)
    
