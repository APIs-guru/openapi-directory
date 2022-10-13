from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportTrips:
    average_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageSpeed' }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    driver_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverName' }})
    driver_unique_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverUniqueId' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endAddress' }})
    end_lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endLat' }})
    end_lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endLon' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSpeed' }})
    spent_fuel: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spentFuel' }})
    start_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAddress' }})
    start_lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startLat' }})
    start_lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startLon' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
