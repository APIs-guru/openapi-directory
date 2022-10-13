from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import incoming_phone_number_local_enum_address_requirement_enum
from . import incoming_phone_number_local_enum_emergency_address_status_enum
from . import incoming_phone_number_local_enum_emergency_status_enum
from . import incoming_phone_number_local_enum_voice_receive_mode_enum


@dataclass_json
@dataclass
class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities:
    fax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    mms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mms' }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms' }})
    voice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    
class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    address_requirements: Optional[incoming_phone_number_local_enum_address_requirement_enum.IncomingPhoneNumberLocalEnumAddressRequirementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_requirements' }})
    address_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_sid' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beta' }})
    bundle_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundle_sid' }})
    capabilities: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    emergency_address_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emergency_address_sid' }})
    emergency_address_status: Optional[incoming_phone_number_local_enum_emergency_address_status_enum.IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emergency_address_status' }})
    emergency_status: Optional[incoming_phone_number_local_enum_emergency_status_enum.IncomingPhoneNumberLocalEnumEmergencyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emergency_status' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    identity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity_sid' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sms_application_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_application_sid' }})
    sms_fallback_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_fallback_method' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_fallback_url' }})
    sms_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_method' }})
    sms_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_url' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback' }})
    status_callback_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_method' }})
    trunk_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trunk_sid' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    voice_application_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_application_sid' }})
    voice_caller_id_lookup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_caller_id_lookup' }})
    voice_fallback_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_fallback_method' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_fallback_url' }})
    voice_method: Optional[APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_method' }})
    voice_receive_mode: Optional[incoming_phone_number_local_enum_voice_receive_mode_enum.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_receive_mode' }})
    voice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_url' }})
    
