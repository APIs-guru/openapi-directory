from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules:
    all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    track: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class VideoV1RoomRoomParticipantRoomParticipantSubscribeRule:
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_sid' }})
    room_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room_sid' }})
    rules: Optional[List[VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
