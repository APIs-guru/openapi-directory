from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CostCenters:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
