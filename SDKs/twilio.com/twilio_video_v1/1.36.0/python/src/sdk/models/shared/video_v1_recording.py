from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import recording_enum_codec_enum
from . import recording_enum_format_enum
from . import recording_enum_status_enum
from . import recording_enum_type_enum

class VideoV1RecordingStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class VideoV1Recording:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    codec: Optional[recording_enum_codec_enum.RecordingEnumCodecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    container_format: Optional[recording_enum_format_enum.RecordingEnumFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container_format' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    grouping_sids: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grouping_sids' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    media_external_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_external_location' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    source_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_sid' }})
    status: Optional[recording_enum_status_enum.RecordingEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback' }})
    status_callback_method: Optional[VideoV1RecordingStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_method' }})
    track_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track_name' }})
    type: Optional[recording_enum_type_enum.RecordingEnumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
