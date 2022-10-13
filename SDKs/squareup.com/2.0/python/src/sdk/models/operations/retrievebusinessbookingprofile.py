from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveBusinessBookingProfileSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveBusinessBookingProfileRequest:
    security: RetrieveBusinessBookingProfileSecurity = field(default=None)
    

@dataclass
class RetrieveBusinessBookingProfileResponse:
    content_type: str = field(default=None)
    retrieve_business_booking_profile_response: Optional[shared.RetrieveBusinessBookingProfileResponse] = field(default=None)
    status_code: int = field(default=None)
    
