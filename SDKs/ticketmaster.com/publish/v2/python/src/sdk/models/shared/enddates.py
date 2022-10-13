from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import localtime


@dataclass_json
@dataclass
class EndDates:
    approximate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approximate' }})
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_time: Optional[localtime.LocalTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localTime' }})
    
