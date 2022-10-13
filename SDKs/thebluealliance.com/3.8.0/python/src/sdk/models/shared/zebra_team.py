from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ZebraTeam:
    team_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_key' }})
    xs: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xs' }})
    ys: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ys' }})
    
