from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayoutNameV3:
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    
