from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import datetimezone


@dataclass_json
@dataclass
class Chronology:
    zone: Optional[datetimezone.DateTimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
