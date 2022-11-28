from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Track:
    r"""Track
    A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.
    """
    
    clips: List[Clip] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clips') }})
    
