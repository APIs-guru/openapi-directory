from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    Container Class for the Web API
    """
    
    child_users: Optional[List[User]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChildUsers') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    id_as_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdAsString') }})
    is_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAdmin') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
