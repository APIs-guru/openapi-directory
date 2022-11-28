from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamRobot:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    robot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot_name') }})
    team_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    year: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
