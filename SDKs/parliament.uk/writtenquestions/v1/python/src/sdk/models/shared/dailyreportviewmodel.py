from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import houseenum_enum


@dataclass_json
@dataclass
class DailyReportViewModel:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSizeBytes' }})
    house: Optional[houseenum_enum.HouseEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
