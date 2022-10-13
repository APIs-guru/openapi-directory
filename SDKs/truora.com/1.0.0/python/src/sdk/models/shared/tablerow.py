from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tablecell


@dataclass_json
@dataclass
class TableRow:
    cells: List[tablecell.TableCell] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    
