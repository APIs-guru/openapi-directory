from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartDates:
    r"""StartDates
    Event's Start Dates
    """
    
    date_tba: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTBA') }})
    date_tbd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTBD') }})
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_time: Optional[LocalTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localTime') }})
    no_specific_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noSpecificTime') }})
    time_tba: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeTBA') }})
    
