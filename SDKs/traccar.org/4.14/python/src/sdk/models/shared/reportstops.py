from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportStops:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineHours' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    spent_fuel: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spentFuel' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
