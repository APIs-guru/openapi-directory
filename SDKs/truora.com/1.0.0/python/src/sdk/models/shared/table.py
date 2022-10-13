from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tablerow


@dataclass_json
@dataclass
class Table:
    rows: List[tablerow.TableRow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
