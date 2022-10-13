from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TableMetadataPrimaryKeyResponse:
    column_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_names' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
