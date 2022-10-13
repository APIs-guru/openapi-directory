from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta1
from . import meta


@dataclass_json
@dataclass
class AnnotationRestAPIGetList:
    changed_by: Optional[meta1.Meta1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by' }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_delta_humanized' }})
    created_by: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    end_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    long_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'long_descr' }})
    short_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_descr' }})
    start_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
