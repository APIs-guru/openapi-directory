from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserDutyInfo:
    last_status_change: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatusChange'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    on_duty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onDuty') }})
    on_manager_duty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onManagerDuty') }})
    overdue: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overdue') }})
    
