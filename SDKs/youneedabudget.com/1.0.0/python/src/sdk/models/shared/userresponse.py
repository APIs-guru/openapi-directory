from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class UserResponseData:
    user: user.User = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class UserResponse:
    data: UserResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
