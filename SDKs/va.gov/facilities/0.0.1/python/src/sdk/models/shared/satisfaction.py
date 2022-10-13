from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import patientsatisfaction


@dataclass_json
@dataclass
class Satisfaction:
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    health: Optional[patientsatisfaction.PatientSatisfaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    
