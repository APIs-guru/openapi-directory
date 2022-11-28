from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserResponseData:
    user: User = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class UserResponse:
    data: UserResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
