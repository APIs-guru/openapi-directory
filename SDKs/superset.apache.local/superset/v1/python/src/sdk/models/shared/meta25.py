from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta25:
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    d3format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'd3format' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric_name' }})
    metric_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric_type' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    verbose_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verbose_name' }})
    warning_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warning_text' }})
    
