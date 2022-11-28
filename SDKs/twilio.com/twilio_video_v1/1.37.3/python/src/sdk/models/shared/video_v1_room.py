from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideoV1RoomStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class VideoV1Room:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    audio_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_only') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    empty_room_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('empty_room_timeout') }})
    enable_turn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_turn') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    large_room: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_room') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    max_concurrent_published_tracks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_concurrent_published_tracks') }})
    max_participant_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_participant_duration') }})
    max_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_participants') }})
    media_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_region') }})
    record_participants_on_connect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_participants_on_connect') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    status: Optional[RoomEnumRoomStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback') }})
    status_callback_method: Optional[VideoV1RoomStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_callback_method') }})
    type: Optional[RoomEnumRoomTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_name') }})
    unused_room_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unused_room_timeout') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    video_codecs: Optional[List[RoomEnumVideoCodecEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_codecs') }})
    
