from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppointmentSegment:
    duration_minutes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_minutes' }})
    service_variation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_variation_id' }})
    service_variation_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_variation_version' }})
    team_member_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_id' }})
    
