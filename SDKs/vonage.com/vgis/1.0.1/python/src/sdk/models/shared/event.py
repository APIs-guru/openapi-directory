from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EventDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class EventStateEnum(str, Enum):
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

class EventTypeEnum(str, Enum):
    CALL = "CALL"


@dataclass_json
@dataclass
class Event:
    account_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    direction: EventDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    phone_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    start_time: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: EventStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: EventTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uci_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uciId') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    answer_time: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerTime'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    caller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerId') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end_time: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    sms_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsData') }})
    
