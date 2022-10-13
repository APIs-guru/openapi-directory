from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import zebra_team
from . import zebra_team


@dataclass_json
@dataclass
class ZebraAlliances:
    blue: Optional[List[zebra_team.ZebraTeam]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blue' }})
    red: Optional[List[zebra_team.ZebraTeam]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'red' }})
    

@dataclass_json
@dataclass
class Zebra:
    alliances: ZebraAlliances = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alliances' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    times: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'times' }})
    
