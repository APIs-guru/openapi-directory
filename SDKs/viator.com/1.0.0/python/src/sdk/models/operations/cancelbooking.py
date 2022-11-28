from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CANCEL_BOOKING_SERVERS = [
	"https://api.sandbox.viator.com/partner",
]


@dataclass
class CancelBookingPathParams:
    booking_reference: str = field(metadata={'path_param': { 'field_name': 'booking-reference', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelBookingHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    
class CancelBooking400ApplicationJSONCodeEnum(str, Enum):
    BAD_REQUEST = "BAD_REQUEST"

class CancelBooking400ApplicationJSONMessageEnum(str, Enum):
    MISSING_CANCELLATION_REASON = "Missing cancellation reason"


@dataclass_json
@dataclass
class CancelBooking400ApplicationJSON:
    code: Optional[CancelBooking400ApplicationJSONCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[CancelBooking400ApplicationJSONMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
class CancelBooking404ApplicationJSONCodeEnum(str, Enum):
    NOT_FOUND = "NOT_FOUND"

class CancelBooking404ApplicationJSONMessageEnum(str, Enum):
    BOOKING_NOT_FOUND = "Booking not found"


@dataclass_json
@dataclass
class CancelBooking404ApplicationJSON:
    code: Optional[CancelBooking404ApplicationJSONCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[CancelBooking404ApplicationJSONMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass
class CancelBookingRequest:
    headers: CancelBookingHeaders = field()
    path_params: CancelBookingPathParams = field()
    request: Optional[shared.CancellationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CancelBookingResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_unauthorized: Optional[shared.FourHundredAndOneUnauthorized] = field(default=None)
    four_hundred_and_six_not_acceptable: Optional[shared.FourHundredAndSixNotAcceptable] = field(default=None)
    five_hundred_internal_server_error: Optional[shared.FiveHundredInternalServerError] = field(default=None)
    five_hundred_and_three_service_unavailable: Optional[shared.FiveHundredAndThreeServiceUnavailable] = field(default=None)
    cancel_booking_response: Optional[shared.CancelBookingResponse] = field(default=None)
    cancel_booking_400_application_json_object: Optional[CancelBooking400ApplicationJSON] = field(default=None)
    cancel_booking_404_application_json_object: Optional[CancelBooking404ApplicationJSON] = field(default=None)
    
