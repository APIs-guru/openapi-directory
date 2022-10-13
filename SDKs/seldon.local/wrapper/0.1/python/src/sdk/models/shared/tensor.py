from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tensor:
    shape: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shape' }})
    values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
