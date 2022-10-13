from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import group
from . import link


@dataclass_json
@dataclass
class FhirCondition:
    asserter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asserter' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    full_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullDescription' }})
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
