from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatedBy:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    

@dataclass_json
@dataclass
class Updated:
    at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    by: Optional[UpdatedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'by' }})
    
