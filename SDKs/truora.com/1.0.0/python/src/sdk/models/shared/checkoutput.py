from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckOutput:
    r"""CheckOutput
    Represents the result of a background check search
    """
    
    check: Check = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check') }})
    details: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
