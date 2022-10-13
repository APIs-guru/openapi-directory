from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import teammemberbookingprofile


@dataclass_json
@dataclass
class ListTeamMemberBookingProfilesResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    team_member_booking_profiles: Optional[List[teammemberbookingprofile.TeamMemberBookingProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_booking_profiles' }})
    
