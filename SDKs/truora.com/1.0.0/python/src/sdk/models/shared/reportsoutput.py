from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import report


@dataclass_json
@dataclass
class ReportsOutput:
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    reports: List[report.Report] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reports' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
