from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChecksOutput:
    r"""ChecksOutput
    Represents the results of a background check search
    """
    
    checks: List[Check] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checks') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
