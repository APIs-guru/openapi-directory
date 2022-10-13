from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import meta2


@dataclass_json
@dataclass
class AnnotationRestAPIGet:
    end_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    json_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'json_metadata' }})
    layer: meta2.Meta2 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layer' }})
    long_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'long_descr' }})
    short_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_descr' }})
    start_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
