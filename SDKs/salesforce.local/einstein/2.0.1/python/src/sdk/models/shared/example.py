from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import label


@dataclass_json
@dataclass
class Example:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[label.Label] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
