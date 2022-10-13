from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateBookingPathParams:
    booking_id: str = field(default=None, metadata={'path_param': { 'field_name': 'booking_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBookingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateBookingRequest:
    path_params: UpdateBookingPathParams = field(default=None)
    request: shared.UpdateBookingRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBookingSecurity = field(default=None)
    

@dataclass
class UpdateBookingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_booking_response: Optional[shared.UpdateBookingResponse] = field(default=None)
    
