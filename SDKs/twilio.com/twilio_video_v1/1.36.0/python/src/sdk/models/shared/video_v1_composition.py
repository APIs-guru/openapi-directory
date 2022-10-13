from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import composition_enum_format_enum
from . import composition_enum_status_enum

class VideoV1CompositionStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class VideoV1Composition:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    audio_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_sources' }})
    audio_sources_excluded: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_sources_excluded' }})
    bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrate' }})
    date_completed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_completed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_deleted: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_deleted', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    format: Optional[composition_enum_format_enum.CompositionEnumFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    media_external_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_external_location' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    room_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[composition_enum_status_enum.CompositionEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback' }})
    status_callback_method: Optional[VideoV1CompositionStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_method' }})
    trim: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    video_layout: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video_layout' }})
    
