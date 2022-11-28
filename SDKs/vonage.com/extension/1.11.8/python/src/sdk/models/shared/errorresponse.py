from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorResponse:
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    status: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
