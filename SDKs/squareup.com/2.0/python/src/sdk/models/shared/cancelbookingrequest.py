from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelBookingRequest:
    booking_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booking_version' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
