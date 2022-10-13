from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NumberValidation:
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    
