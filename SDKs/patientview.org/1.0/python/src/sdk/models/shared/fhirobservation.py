from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import group


@dataclass_json
@dataclass
class FhirObservation:
    applies: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applies', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    body_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodySite' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    diagram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagram' }})
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    temporary_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporaryUuid' }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
