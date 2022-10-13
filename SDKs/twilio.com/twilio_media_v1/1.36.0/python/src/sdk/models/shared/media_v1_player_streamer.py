from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import player_streamer_enum_ended_reason_enum
from . import player_streamer_enum_status_enum

class MediaV1PlayerStreamerStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class MediaV1PlayerStreamer:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ended_reason: Optional[player_streamer_enum_ended_reason_enum.PlayerStreamerEnumEndedReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ended_reason' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    max_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_duration' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[player_streamer_enum_status_enum.PlayerStreamerEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback' }})
    status_callback_method: Optional[MediaV1PlayerStreamerStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_method' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    
