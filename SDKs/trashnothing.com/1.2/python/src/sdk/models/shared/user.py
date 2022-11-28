from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserFeedback:
    percent_positive: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent_positive') }})
    restriction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restriction') }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    

@dataclass_json
@dataclass
class User:
    about_me: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about_me') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    feedback: Optional[UserFeedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstname') }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastname') }})
    member_since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_since') }})
    profile_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_image') }})
    reply_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_time') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
