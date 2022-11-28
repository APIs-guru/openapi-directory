from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LordsByType:
    bishop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bishop') }})
    hereditary: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hereditary') }})
    life: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('life') }})
    party: Optional[Party] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
