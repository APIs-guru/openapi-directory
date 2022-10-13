from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesValidityPeriod:
    from_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_now: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNow' }})
    to_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
