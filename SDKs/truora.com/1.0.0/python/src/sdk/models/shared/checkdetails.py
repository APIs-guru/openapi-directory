from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json
from . import table


@dataclass_json
@dataclass
class CheckDetails:
    check_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_id' }})
    data_set: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_set' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_name' }})
    group: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    score: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    tables: List[table.Table] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    
