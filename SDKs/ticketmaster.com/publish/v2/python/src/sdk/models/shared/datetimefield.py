from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import durationfield
from . import durationfield
from . import durationfield
from . import datetimefieldtype


@dataclass_json
@dataclass
class DateTimeField:
    duration_field: Optional[durationfield.DurationField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationField' }})
    leap_duration_field: Optional[durationfield.DurationField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leapDurationField' }})
    lenient: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lenient' }})
    maximum_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumValue' }})
    minimum_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    range_duration_field: Optional[durationfield.DurationField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeDurationField' }})
    supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    type: Optional[datetimefieldtype.DateTimeFieldType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
