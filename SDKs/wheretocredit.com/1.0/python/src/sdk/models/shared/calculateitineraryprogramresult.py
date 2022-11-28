from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CalculateItineraryProgramResult:
    airlines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airlines') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revenue_based: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenueBased') }})
    unpublished: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unpublished') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
