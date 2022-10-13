from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveBookingPathParams:
    booking_id: str = field(default=None, metadata={'path_param': { 'field_name': 'booking_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveBookingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveBookingRequest:
    path_params: RetrieveBookingPathParams = field(default=None)
    security: RetrieveBookingSecurity = field(default=None)
    

@dataclass
class RetrieveBookingResponse:
    content_type: str = field(default=None)
    retrieve_booking_response: Optional[shared.RetrieveBookingResponse] = field(default=None)
    status_code: int = field(default=None)
    
