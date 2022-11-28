from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PageLinks:
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    related: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    
