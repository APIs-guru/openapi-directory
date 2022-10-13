from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnnotationRestAPIPost:
    end_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    json_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'json_metadata' }})
    long_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'long_descr' }})
    short_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_descr' }})
    start_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
