from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Segment:
    booking_class: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingClass') }})
    carrier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    origin: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    departure: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departure'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    flight_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightNumber') }})
    operating_carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingCarrier') }})
    
