from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class TrunkingV1TrunkPhoneNumberSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class TrunkingV1TrunkPhoneNumberVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class TrunkingV1TrunkPhoneNumber:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    address_requirements: Optional[PhoneNumberEnumAddressRequirementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_requirements') }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beta') }})
    capabilities: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    sms_application_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_application_sid') }})
    sms_fallback_method: Optional[TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_fallback_method') }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_fallback_url') }})
    sms_method: Optional[TrunkingV1TrunkPhoneNumberSmsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_method') }})
    sms_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_url') }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback') }})
    status_callback_method: Optional[TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback_method') }})
    trunk_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trunk_sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    voice_application_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_application_sid') }})
    voice_caller_id_lookup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_caller_id_lookup') }})
    voice_fallback_method: Optional[TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_method') }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_url') }})
    voice_method: Optional[TrunkingV1TrunkPhoneNumberVoiceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_method') }})
    voice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_url') }})
    
