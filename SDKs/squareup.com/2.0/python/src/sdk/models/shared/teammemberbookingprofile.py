from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamMemberBookingProfile:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    is_bookable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_bookable' }})
    profile_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile_image_url' }})
    team_member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_id' }})
    
