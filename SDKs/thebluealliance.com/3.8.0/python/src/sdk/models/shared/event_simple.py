from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import district_list


@dataclass_json
@dataclass
class EventSimple:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    district: Optional[district_list.DistrictList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    end_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_code' }})
    event_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_prov: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_prov' }})
    year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
