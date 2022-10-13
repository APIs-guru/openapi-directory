from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class InsightsV1ConferenceConferenceParticipant:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    call_direction: Optional[shared.ConferenceParticipantEnumCallDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_direction' }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_sid' }})
    call_status: Optional[shared.ConferenceParticipantEnumCallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_status' }})
    call_type: Optional[shared.ConferenceParticipantEnumCallTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_type' }})
    coached_participants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coached_participants' }})
    conference_region: Optional[shared.ConferenceParticipantEnumRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference_region' }})
    conference_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference_sid' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_seconds' }})
    events: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    is_coach: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_coach' }})
    is_moderator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_moderator' }})
    jitter_buffer_size: Optional[shared.ConferenceParticipantEnumJitterBufferSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jitter_buffer_size' }})
    join_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'join_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    leave_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leave_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metrics: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    outbound_queue_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_queue_length' }})
    outbound_time_in_queue: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_time_in_queue' }})
    participant_region: Optional[shared.ConferenceParticipantEnumRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_region' }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_sid' }})
    processing_state: Optional[shared.ConferenceParticipantEnumProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_state' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
