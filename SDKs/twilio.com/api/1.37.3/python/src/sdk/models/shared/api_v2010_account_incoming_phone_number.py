from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIV2010AccountIncomingPhoneNumberCapabilities:
    r"""APIV2010AccountIncomingPhoneNumberCapabilities
    Indicate if a phone can receive calls or messages
    """
    
    fax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    mms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms') }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    voice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    
class APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountIncomingPhoneNumberVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIV2010AccountIncomingPhoneNumber:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    address_requirements: Optional[IncomingPhoneNumberEnumAddressRequirementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_requirements') }})
    address_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_sid') }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beta') }})
    bundle_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundle_sid') }})
    capabilities: Optional[APIV2010AccountIncomingPhoneNumberCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    emergency_address_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_address_sid') }})
    emergency_address_status: Optional[IncomingPhoneNumberEnumEmergencyAddressStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_address_status') }})
    emergency_status: Optional[IncomingPhoneNumberEnumEmergencyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_status') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    identity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity_sid') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    sms_application_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_application_sid') }})
    sms_fallback_method: Optional[APIV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_fallback_method') }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_fallback_url') }})
    sms_method: Optional[APIV2010AccountIncomingPhoneNumberSmsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_method') }})
    sms_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_url') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback') }})
    status_callback_method: Optional[APIV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback_method') }})
    trunk_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trunk_sid') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    voice_application_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_application_sid') }})
    voice_caller_id_lookup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_caller_id_lookup') }})
    voice_fallback_method: Optional[APIV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_method') }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_url') }})
    voice_method: Optional[APIV2010AccountIncomingPhoneNumberVoiceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_method') }})
    voice_receive_mode: Optional[IncomingPhoneNumberEnumVoiceReceiveModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_receive_mode') }})
    voice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_url') }})
    
