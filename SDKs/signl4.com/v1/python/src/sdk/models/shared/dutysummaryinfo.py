from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DutySummaryInfo:
    duty_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dutyEnd'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duty_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dutyId') }})
    duty_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dutyStart'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
