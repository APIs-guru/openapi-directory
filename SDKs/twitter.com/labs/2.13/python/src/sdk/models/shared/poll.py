from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import polloption

class PollVotingStatusEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class Poll:
    duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_minutes' }})
    end_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_datetime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    options: List[polloption.PollOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    voting_status: Optional[PollVotingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voting_status' }})
    
