from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIV2010AccountConferenceParticipant:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_sid') }})
    call_sid_to_coach: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_sid_to_coach') }})
    coaching: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coaching') }})
    conference_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_sid') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    end_conference_on_exit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_conference_on_exit') }})
    hold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hold') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    muted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muted') }})
    start_conference_on_enter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_conference_on_enter') }})
    status: Optional[ParticipantEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
