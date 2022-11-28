from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OptionalDateTimeContract:
    day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    is_empty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEmpty') }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
