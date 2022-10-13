from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CancelBookingResponseReasonEnum(str, Enum):
    ALREADY_CANCELLED = "ALREADY_CANCELLED"
    NOT_CANCELLABLE = "NOT_CANCELLABLE"

class CancelBookingResponseStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    DECLINED = "DECLINED"


@dataclass_json
@dataclass
class CancelBookingResponse:
    booking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingId' }})
    reason: Optional[CancelBookingResponseReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[CancelBookingResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
