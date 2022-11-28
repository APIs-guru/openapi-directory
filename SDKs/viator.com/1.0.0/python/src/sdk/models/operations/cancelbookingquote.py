from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CANCEL_BOOKING_QUOTE_SERVERS = [
	"https://api.sandbox.viator.com/partner",
]


@dataclass
class CancelBookingQuotePathParams:
    booking_reference: str = field(metadata={'path_param': { 'field_name': 'booking-reference', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelBookingQuoteRequest:
    path_params: CancelBookingQuotePathParams = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CancelBookingQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_unauthorized: Optional[shared.FourHundredAndOneUnauthorized] = field(default=None)
    four_hundred_and_six_not_acceptable: Optional[shared.FourHundredAndSixNotAcceptable] = field(default=None)
    five_hundred_internal_server_error: Optional[shared.FiveHundredInternalServerError] = field(default=None)
    five_hundred_and_three_service_unavailable: Optional[shared.FiveHundredAndThreeServiceUnavailable] = field(default=None)
    cancel_booking_quote_response: Optional[shared.CancelBookingQuoteResponse] = field(default=None)
    
