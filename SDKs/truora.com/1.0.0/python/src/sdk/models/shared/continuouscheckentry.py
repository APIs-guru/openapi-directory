from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import change


@dataclass_json
@dataclass
class ContinuousCheckEntry:
    changes: Optional[List[change.Change]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_id' }})
    continuous_check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuous_check_id' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    previous_check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_check_id' }})
    
