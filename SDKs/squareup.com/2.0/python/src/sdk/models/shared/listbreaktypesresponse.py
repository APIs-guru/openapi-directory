from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import breaktype
from . import error


@dataclass_json
@dataclass
class ListBreakTypesResponse:
    break_types: Optional[List[breaktype.BreakType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break_types' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
