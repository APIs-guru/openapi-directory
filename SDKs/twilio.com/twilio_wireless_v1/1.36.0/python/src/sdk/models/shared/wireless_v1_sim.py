from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import sim_enum_reset_status_enum
from . import sim_enum_status_enum

class WirelessV1SimCommandsCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class WirelessV1SimSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class WirelessV1SimSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class WirelessV1SimVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class WirelessV1SimVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class WirelessV1Sim:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    commands_callback_method: Optional[WirelessV1SimCommandsCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands_callback_method' }})
    commands_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands_callback_url' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    e_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'e_id' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    iccid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iccid' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    rate_plan_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate_plan_sid' }})
    reset_status: Optional[sim_enum_reset_status_enum.SimEnumResetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset_status' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sms_fallback_method: Optional[WirelessV1SimSmsFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_fallback_method' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_fallback_url' }})
    sms_method: Optional[WirelessV1SimSmsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_method' }})
    sms_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_url' }})
    status: Optional[sim_enum_status_enum.SimEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    voice_fallback_method: Optional[WirelessV1SimVoiceFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_fallback_method' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_fallback_url' }})
    voice_method: Optional[WirelessV1SimVoiceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_method' }})
    voice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_url' }})
    
