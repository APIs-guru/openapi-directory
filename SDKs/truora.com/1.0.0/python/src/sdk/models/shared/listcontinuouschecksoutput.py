from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import check


@dataclass_json
@dataclass
class ListContinuousChecksOutput:
    continuous_checks: Optional[List[check.Check]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuous_checks' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
