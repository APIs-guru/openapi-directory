from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MatchAlliance:
    dq_team_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dq_team_keys' }})
    score: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    surrogate_team_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surrogate_team_keys' }})
    team_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_keys' }})
    
