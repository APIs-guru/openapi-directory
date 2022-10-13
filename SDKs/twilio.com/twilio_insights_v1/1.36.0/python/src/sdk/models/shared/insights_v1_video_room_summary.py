from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import video_room_summary_enum_codec_enum
from . import video_room_summary_enum_created_method_enum
from . import video_room_summary_enum_edge_location_enum
from . import video_room_summary_enum_end_reason_enum
from . import video_room_summary_enum_twilio_realm_enum
from . import video_room_summary_enum_processing_state_enum
from . import video_room_summary_enum_room_status_enum
from . import video_room_summary_enum_room_type_enum

class InsightsV1VideoRoomSummaryStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class InsightsV1VideoRoomSummary:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    codecs: Optional[List[video_room_summary_enum_codec_enum.VideoRoomSummaryEnumCodecEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codecs' }})
    concurrent_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrent_participants' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_method: Optional[video_room_summary_enum_created_method_enum.VideoRoomSummaryEnumCreatedMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_method' }})
    duration_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_sec' }})
    edge_location: Optional[video_room_summary_enum_edge_location_enum.VideoRoomSummaryEnumEdgeLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edge_location' }})
    end_reason: Optional[video_room_summary_enum_end_reason_enum.VideoRoomSummaryEnumEndReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_reason' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    max_concurrent_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_concurrent_participants' }})
    max_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_participants' }})
    media_region: Optional[video_room_summary_enum_twilio_realm_enum.VideoRoomSummaryEnumTwilioRealmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_region' }})
    processing_state: Optional[video_room_summary_enum_processing_state_enum.VideoRoomSummaryEnumProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_state' }})
    recording_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recording_enabled' }})
    room_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_name' }})
    room_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_sid' }})
    room_status: Optional[video_room_summary_enum_room_status_enum.VideoRoomSummaryEnumRoomStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_status' }})
    room_type: Optional[video_room_summary_enum_room_type_enum.VideoRoomSummaryEnumRoomTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_type' }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback' }})
    status_callback_method: Optional[InsightsV1VideoRoomSummaryStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_method' }})
    total_participant_duration_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_participant_duration_sec' }})
    total_recording_duration_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_recording_duration_sec' }})
    unique_participant_identities: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_participant_identities' }})
    unique_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_participants' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
