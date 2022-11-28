from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportTrips:
    average_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageSpeed') }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    driver_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverName') }})
    driver_unique_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverUniqueId') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endAddress') }})
    end_lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endLat') }})
    end_lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endLon') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSpeed') }})
    spent_fuel: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spentFuel') }})
    start_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startAddress') }})
    start_lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startLat') }})
    start_lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startLon') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
