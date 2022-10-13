from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatasetRelatedChart:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    slice_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slice_name' }})
    viz_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viz_type' }})
    
