from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BehaviourOutput:
    r"""BehaviourOutput
    Represents behaviour search results
    """
    
    behavior: List[Behavior] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('behavior') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
