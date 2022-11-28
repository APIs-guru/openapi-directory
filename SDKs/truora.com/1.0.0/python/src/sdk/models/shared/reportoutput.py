from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportOutput:
    r"""ReportOutput
    Reprents the report creation result
    """
    
    checks: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checks') }})
    report: Report = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
