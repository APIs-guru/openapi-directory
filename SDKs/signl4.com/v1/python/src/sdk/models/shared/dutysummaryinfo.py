from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DutySummaryInfo:
    duty_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutyEnd', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duty_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutyId' }})
    duty_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutyStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
