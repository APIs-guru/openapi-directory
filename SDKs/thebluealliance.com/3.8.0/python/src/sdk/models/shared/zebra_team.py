from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ZebraTeam:
    team_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    xs: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('xs') }})
    ys: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ys') }})
    
