from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CancelBookingQuoteResponseStatusEnum(str, Enum):
    CANCELLABLE = "CANCELLABLE"
    CANCELLED = "CANCELLED"
    NOT_CANCELLABLE = "NOT_CANCELLABLE"


@dataclass_json
@dataclass
class CancelBookingQuoteResponse:
    booking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingId') }})
    refund_details: Optional[RefundDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundDetails') }})
    status: Optional[CancelBookingQuoteResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
