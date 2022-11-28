from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PollVotingStatusEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class Poll:
    r"""Poll
    Represent a Poll attached to a Tweet
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    options: List[PollOption] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_minutes') }})
    end_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_datetime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    voting_status: Optional[PollVotingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voting_status') }})
    
