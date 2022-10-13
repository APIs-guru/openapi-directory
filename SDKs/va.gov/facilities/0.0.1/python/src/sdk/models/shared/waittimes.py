from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patientwaittime


@dataclass_json
@dataclass
class WaitTimes:
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    health: Optional[List[patientwaittime.PatientWaitTime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    
