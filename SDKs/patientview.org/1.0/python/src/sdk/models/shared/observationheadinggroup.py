from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import group


@dataclass_json
@dataclass
class ObservationHeadingGroup:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    panel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panel' }})
    panel_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panelOrder' }})
    
