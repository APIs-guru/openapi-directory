from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckDetailsOutput:
    r"""CheckDetailsOutput
    Represents a list of background check details
    """
    
    details: List[CheckDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
