from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chronology
from . import datetimefieldtype
from . import datetimefield


@dataclass_json
@dataclass
class LocalTime:
    chronology: Optional[chronology.Chronology] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chronology' }})
    field_types: Optional[List[datetimefieldtype.DateTimeFieldType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldTypes' }})
    fields: Optional[List[datetimefield.DateTimeField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    hour_of_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourOfDay' }})
    millis_of_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'millisOfDay' }})
    millis_of_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'millisOfSecond' }})
    minute_of_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minuteOfHour' }})
    second_of_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondOfMinute' }})
    values: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
