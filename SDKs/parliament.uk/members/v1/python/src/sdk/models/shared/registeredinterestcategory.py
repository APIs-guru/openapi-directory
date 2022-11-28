from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisteredInterestCategory:
    interests: Optional[List[RegisteredInterest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interests') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
