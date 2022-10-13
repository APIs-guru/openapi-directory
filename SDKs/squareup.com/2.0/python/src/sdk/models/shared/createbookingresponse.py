from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import booking
from . import error


@dataclass_json
@dataclass
class CreateBookingResponse:
    booking: Optional[booking.Booking] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booking' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
