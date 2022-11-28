from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V3VehiclePosition:
    bearing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bearing') }})
    datetime_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datetime_utc'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    easting: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('easting') }})
    expiry_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    northing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('northing') }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplier') }})
    
