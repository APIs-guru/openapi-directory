from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import video_participant_summary_enum_codec_enum
from . import video_participant_summary_enum_edge_location_enum
from . import video_participant_summary_enum_twilio_realm_enum
from . import video_participant_summary_enum_room_status_enum


@dataclass_json
@dataclass
class InsightsV1VideoRoomSummaryVideoParticipantSummary:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    codecs: Optional[List[video_participant_summary_enum_codec_enum.VideoParticipantSummaryEnumCodecEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codecs' }})
    duration_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_sec' }})
    edge_location: Optional[video_participant_summary_enum_edge_location_enum.VideoParticipantSummaryEnumEdgeLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edge_location' }})
    end_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_reason' }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    error_code_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code_url' }})
    join_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'join_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    leave_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leave_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    media_region: Optional[video_participant_summary_enum_twilio_realm_enum.VideoParticipantSummaryEnumTwilioRealmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_region' }})
    participant_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_identity' }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_sid' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    publisher_info: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher_info' }})
    room_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_sid' }})
    status: Optional[video_participant_summary_enum_room_status_enum.VideoParticipantSummaryEnumRoomStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
