from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CellLocation:
    col_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colIndex' }})
    row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowIndex' }})
    
