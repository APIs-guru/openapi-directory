from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListContinuousChecksOutput:
    r"""ListContinuousChecksOutput
    Represents to ListContinuousChecksOutput
    """
    
    continuous_checks: Optional[List[Check]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuous_checks') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
