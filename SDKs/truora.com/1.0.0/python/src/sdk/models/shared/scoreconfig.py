from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScoreConfig:
    data_set: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_set' }})
    weight: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
