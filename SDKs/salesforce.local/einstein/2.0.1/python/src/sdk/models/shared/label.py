from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Label:
    dataset_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    num_examples: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numExamples' }})
    
