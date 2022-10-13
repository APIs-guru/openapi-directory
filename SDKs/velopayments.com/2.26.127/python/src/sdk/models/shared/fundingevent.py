from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fundingeventtype_enum


@dataclass_json
@dataclass
class FundingEvent:
    event_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    funding_event_type: Optional[fundingeventtype_enum.FundingEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingEventType' }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    
