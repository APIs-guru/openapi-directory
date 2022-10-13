from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataset


@dataclass_json
@dataclass
class DatasetList:
    data: Optional[List[dataset.Dataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
