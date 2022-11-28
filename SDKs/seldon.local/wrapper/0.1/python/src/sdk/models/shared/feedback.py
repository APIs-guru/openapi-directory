from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Feedback:
    request: Optional[SeldonMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    response: Optional[SeldonMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    reward: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reward') }})
    truth: Optional[SeldonMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truth') }})
    
