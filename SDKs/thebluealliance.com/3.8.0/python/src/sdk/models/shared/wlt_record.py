from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WltRecord:
    losses: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'losses' }})
    ties: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ties' }})
    wins: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wins' }})
    
