from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessDates:
    r"""AccessDates
    Event's Access Date
    """
    
    end_approximate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endApproximate') }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_approximate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startApproximate') }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
