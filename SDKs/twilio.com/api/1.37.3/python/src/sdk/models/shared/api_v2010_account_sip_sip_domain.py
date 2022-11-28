from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIV2010AccountSipSipDomainVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountSipSipDomainVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIV2010AccountSipSipDomain:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    auth_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_type') }})
    byoc_trunk_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byoc_trunk_sid') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_name') }})
    emergency_caller_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_caller_sid') }})
    emergency_calling_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_calling_enabled') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secure') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    sip_registration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_registration') }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subresource_uris') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    voice_fallback_method: Optional[APIV2010AccountSipSipDomainVoiceFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_method') }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_fallback_url') }})
    voice_method: Optional[APIV2010AccountSipSipDomainVoiceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_method') }})
    voice_status_callback_method: Optional[APIV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_status_callback_method') }})
    voice_status_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_status_callback_url') }})
    voice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_url') }})
    
