from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HookOutput:
    r"""HookOutput
    Represents the output of lists hooks request.
    """
    
    hooks: Optional[List[Hook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    signing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signing_key') }})
    
