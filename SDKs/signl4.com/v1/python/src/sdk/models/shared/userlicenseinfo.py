from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserLicenseInfo:
    current_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentUsers' }})
    is_free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFree' }})
    is_trial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTrial' }})
    licensed_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensedUsers' }})
    plan_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planCode' }})
    
