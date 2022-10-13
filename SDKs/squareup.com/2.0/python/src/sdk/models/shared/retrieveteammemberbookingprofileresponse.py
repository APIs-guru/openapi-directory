from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import teammemberbookingprofile


@dataclass_json
@dataclass
class RetrieveTeamMemberBookingProfileResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    team_member_booking_profile: Optional[teammemberbookingprofile.TeamMemberBookingProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_booking_profile' }})
    
