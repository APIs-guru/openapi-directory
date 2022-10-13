from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import businessbookingprofile
from . import error


@dataclass_json
@dataclass
class RetrieveBusinessBookingProfileResponse:
    business_booking_profile: Optional[businessbookingprofile.BusinessBookingProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business_booking_profile' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
