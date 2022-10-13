from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import teammemberassignedlocations


@dataclass_json
@dataclass
class TeamMember:
    assigned_locations: Optional[teammemberassignedlocations.TeamMemberAssignedLocations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigned_locations' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family_name' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'given_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_owner' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
