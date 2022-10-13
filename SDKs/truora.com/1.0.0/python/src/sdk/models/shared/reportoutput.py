from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import report


@dataclass_json
@dataclass
class ReportOutput:
    checks: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checks' }})
    report: report.Report = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
