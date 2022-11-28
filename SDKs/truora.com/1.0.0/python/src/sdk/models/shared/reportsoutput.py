from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportsOutput:
    r"""ReportsOutput
    Represents the result of report searches
    """
    
    reports: List[Report] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
