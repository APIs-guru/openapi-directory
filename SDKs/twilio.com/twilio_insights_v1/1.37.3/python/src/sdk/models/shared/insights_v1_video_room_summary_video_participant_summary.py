from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightsV1VideoRoomSummaryVideoParticipantSummary:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    codecs: Optional[List[VideoParticipantSummaryEnumCodecEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codecs') }})
    duration_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_sec') }})
    edge_location: Optional[VideoParticipantSummaryEnumEdgeLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edge_location') }})
    end_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_reason') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    error_code_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code_url') }})
    join_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    leave_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leave_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    media_region: Optional[VideoParticipantSummaryEnumTwilioRealmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_region') }})
    participant_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_identity') }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_sid') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher_info: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_info') }})
    room_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_sid') }})
    status: Optional[VideoParticipantSummaryEnumRoomStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
