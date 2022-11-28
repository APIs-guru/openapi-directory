from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserInfo:
    mfa_details: Optional[MfaDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfa_details') }})
    user_type: Optional[UserType2Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userType') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
