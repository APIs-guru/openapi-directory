from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamRobot:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    robot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robot_name' }})
    team_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_key' }})
    year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
