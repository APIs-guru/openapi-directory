from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventSourceEndpointInfo:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    last_event_raised: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEventRaised'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
