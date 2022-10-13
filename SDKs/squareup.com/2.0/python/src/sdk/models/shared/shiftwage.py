from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class ShiftWage:
    hourly_rate: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly_rate' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
