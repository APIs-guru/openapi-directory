from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CallDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class CallStateEnum(str, Enum):
    INITIALIZING = "INITIALIZING"
    RINGING = "RINGING"
    ACTIVE = "ACTIVE"
    HELD = "HELD"
    REMOTE_HELD = "REMOTE_HELD"
    DETACHED = "DETACHED"
    REJECTED = "REJECTED"
    CANCELLED = "CANCELLED"
    ANSWERED = "ANSWERED"
    MISSED = "MISSED"

class CallTypeEnum(str, Enum):
    CALL = "CALL"


@dataclass_json
@dataclass
class Call:
    account_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    answer_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    caller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callerId' }})
    direction: CallDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    duration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    phone_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: CallStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: CallTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uci_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uciId' }})
    user_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
