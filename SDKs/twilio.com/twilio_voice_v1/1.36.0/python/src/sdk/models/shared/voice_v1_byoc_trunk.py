from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VoiceV1ByocTrunkStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class VoiceV1ByocTrunkVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class VoiceV1ByocTrunkVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class VoiceV1ByocTrunk:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cnam_lookup_enabled' }})
    connection_policy_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_policy_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    from_domain_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_domain_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status_callback_method: Optional[VoiceV1ByocTrunkStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_method' }})
    status_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    voice_fallback_method: Optional[VoiceV1ByocTrunkVoiceFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_fallback_method' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_fallback_url' }})
    voice_method: Optional[VoiceV1ByocTrunkVoiceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_method' }})
    voice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_url' }})
    
