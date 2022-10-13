from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import refunddetails

class CancelBookingQuoteResponseStatusEnum(str, Enum):
    CANCELLABLE = "CANCELLABLE"
    CANCELLED = "CANCELLED"
    NOT_CANCELLABLE = "NOT_CANCELLABLE"


@dataclass_json
@dataclass
class CancelBookingQuoteResponse:
    booking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingId' }})
    refund_details: Optional[refunddetails.RefundDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundDetails' }})
    status: Optional[CancelBookingQuoteResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
