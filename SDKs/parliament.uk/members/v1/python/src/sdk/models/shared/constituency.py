from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import constituencyrepresentation


@dataclass_json
@dataclass
class Constituency:
    current_representation: Optional[constituencyrepresentation.ConstituencyRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentRepresentation' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
