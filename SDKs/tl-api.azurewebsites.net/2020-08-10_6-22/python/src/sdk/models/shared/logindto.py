from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoginDto:
    r"""LoginDto
    The LoginDTO Class.
    Contains relevant fields of Login DTO.
                
    """
    
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    remember: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remember') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
