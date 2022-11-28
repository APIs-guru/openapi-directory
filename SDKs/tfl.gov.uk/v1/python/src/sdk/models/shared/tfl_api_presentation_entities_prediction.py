from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPrediction:
    r"""TflAPIPresentationEntitiesPrediction
    DTO to capture the prediction details
    """
    
    bearing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bearing') }})
    current_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLocation') }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    destination_naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationNaptanId') }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    expected_arrival: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedArrival'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineId') }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineName') }})
    mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modeName') }})
    naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naptanId') }})
    operation_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationType') }})
    platform_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformName') }})
    station_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stationName') }})
    time_to_live: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToLive'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_to_station: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToStation') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timing: Optional[TflAPIPresentationEntitiesPredictionTiming] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    towards: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('towards') }})
    vehicle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicleId') }})
    
