from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateBookingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateBookingRequest:
    request: shared.CreateBookingRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateBookingSecurity = field(default=None)
    

@dataclass
class CreateBookingResponse:
    content_type: str = field(default=None)
    create_booking_response: Optional[shared.CreateBookingResponse] = field(default=None)
    status_code: int = field(default=None)
    
