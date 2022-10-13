from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Segment:
    booking_class: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingClass' }})
    carrier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    departure: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departure', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    flight_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightNumber' }})
    operating_carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingCarrier' }})
    origin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    
