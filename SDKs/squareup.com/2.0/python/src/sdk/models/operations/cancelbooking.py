from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelBookingPathParams:
    booking_id: str = field(default=None, metadata={'path_param': { 'field_name': 'booking_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelBookingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelBookingRequest:
    path_params: CancelBookingPathParams = field(default=None)
    request: shared.CancelBookingRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CancelBookingSecurity = field(default=None)
    

@dataclass
class CancelBookingResponse:
    cancel_booking_response: Optional[shared.CancelBookingResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
