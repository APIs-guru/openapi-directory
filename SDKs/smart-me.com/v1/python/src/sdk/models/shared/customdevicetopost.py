from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdevicevalues


@dataclass_json
@dataclass
class CustomDeviceToPost:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    serial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Serial' }})
    value_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    values: Optional[List[customdevicevalues.CustomDeviceValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
