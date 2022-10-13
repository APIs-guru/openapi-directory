from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import check


@dataclass_json
@dataclass
class ChecksOutput:
    checks: List[check.Check] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checks' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
