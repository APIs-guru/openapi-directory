from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import simplifiedshowobject


@dataclass_json
@dataclass
class SavedShowObject:
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    show: Optional[simplifiedshowobject.SimplifiedShowObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show' }})
    
