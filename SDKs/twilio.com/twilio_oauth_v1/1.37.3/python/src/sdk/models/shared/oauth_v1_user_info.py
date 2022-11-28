from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OauthV1UserInfo:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_sid') }})
    
