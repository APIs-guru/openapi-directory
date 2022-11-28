from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MatchAlliance:
    score: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    team_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_keys') }})
    dq_team_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dq_team_keys') }})
    surrogate_team_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surrogate_team_keys') }})
    
