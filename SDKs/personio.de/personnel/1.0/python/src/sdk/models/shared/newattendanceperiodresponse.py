from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NewAttendancePeriodResponseData:
    id: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class NewAttendancePeriodResponse:
    data: NewAttendancePeriodResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
