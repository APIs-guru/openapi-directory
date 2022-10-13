from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class VideoV1RoomRoomRecording:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    codec: Optional[shared.RoomRecordingEnumCodecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    container_format: Optional[shared.RoomRecordingEnumFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container_format' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    grouping_sids: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grouping_sids' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    media_external_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_external_location' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    room_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    source_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_sid' }})
    status: Optional[shared.RoomRecordingEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    track_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track_name' }})
    type: Optional[shared.RoomRecordingEnumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
