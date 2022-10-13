from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shift


@dataclass_json
@dataclass
class CreateShiftRequest:
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    shift: shift.Shift = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shift' }})
    
