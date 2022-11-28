from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetContiuousCheckHistoryOutput:
    r"""GetContiuousCheckHistoryOutput
    GetContiuousCheckHistoryOutput
    """
    
    history: List[Change] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('history') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
