from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Staff:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    forename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forename') }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surname') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
