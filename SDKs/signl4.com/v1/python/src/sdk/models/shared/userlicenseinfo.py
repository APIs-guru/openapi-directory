from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserLicenseInfo:
    current_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentUsers') }})
    is_free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFree') }})
    is_trial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTrial') }})
    licensed_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensedUsers') }})
    plan_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planCode') }})
    
