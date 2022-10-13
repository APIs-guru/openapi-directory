from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta4
from . import meta3


@dataclass_json
@dataclass
class AnnotationLayerRestAPIGetList:
    changed_by: Optional[meta4.Meta4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by' }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_delta_humanized' }})
    created_by: Optional[meta3.Meta3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descr' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
