from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Notification:
    always: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('always') }})
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    calendar_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarId') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mail') }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    web: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('web') }})
    
