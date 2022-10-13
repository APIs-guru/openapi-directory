from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TableCell:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
