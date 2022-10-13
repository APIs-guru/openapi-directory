from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import breaktype


@dataclass_json
@dataclass
class CreateBreakTypeRequest:
    break_type: breaktype.BreakType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break_type' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
