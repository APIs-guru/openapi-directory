from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MBusData:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'Date' }})
    telegram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Telegram' }, 'form': { 'field_name': 'Telegram' }})
    
