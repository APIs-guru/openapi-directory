from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LabelResult:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probability' }})
    
