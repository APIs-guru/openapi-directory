from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Report:
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    created_checks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_checks_count' }})
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    has_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invalid_checks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_checks_count' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
