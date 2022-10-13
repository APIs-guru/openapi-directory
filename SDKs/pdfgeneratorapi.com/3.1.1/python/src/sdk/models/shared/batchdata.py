from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import data


@dataclass_json
@dataclass
class BatchData:
    data: Optional[data.Data] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    template: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    
