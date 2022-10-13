from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamSimple:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    state_prov: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_prov' }})
    team_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_number' }})
    
