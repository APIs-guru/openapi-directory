from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CancelBookingResponseReasonEnum(str, Enum):
    ALREADY_CANCELLED = "ALREADY_CANCELLED"
    NOT_CANCELLABLE = "NOT_CANCELLABLE"

class CancelBookingResponseStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    DECLINED = "DECLINED"


@dataclass_json
@dataclass
class CancelBookingResponse:
    booking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingId') }})
    reason: Optional[CancelBookingResponseReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[CancelBookingResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
