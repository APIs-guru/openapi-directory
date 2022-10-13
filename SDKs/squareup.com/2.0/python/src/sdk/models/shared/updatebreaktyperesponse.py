from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import breaktype
from . import error


@dataclass_json
@dataclass
class UpdateBreakTypeResponse:
    break_type: Optional[breaktype.BreakType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break_type' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
