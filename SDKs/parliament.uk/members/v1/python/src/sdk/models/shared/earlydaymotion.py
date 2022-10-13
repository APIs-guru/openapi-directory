from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EarlyDayMotion:
    date_tabled: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTabled', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_amendment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAmendment' }})
    is_prayer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrayer' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    sponsors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsorsCount' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
