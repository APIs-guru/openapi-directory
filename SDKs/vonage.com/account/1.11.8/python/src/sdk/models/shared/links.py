from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Links:
    first: Optional[FirstHref] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[LastHref] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[NextHref] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: Optional[PrevHref] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    self: Optional[SelfHref] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
