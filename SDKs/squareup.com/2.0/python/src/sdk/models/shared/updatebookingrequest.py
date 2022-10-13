from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import booking


@dataclass_json
@dataclass
class UpdateBookingRequest:
    booking: booking.Booking = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booking' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
