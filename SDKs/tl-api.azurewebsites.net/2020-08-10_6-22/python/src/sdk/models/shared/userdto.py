from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserDto:
    r"""UserDto
    The UserDTO Class.
    Contains relevant fields of User DTO by masking actual User entity's fields in application.
                
    """
    
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    external_entity_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalEntityNumber') }})
    guardian: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guardian') }})
    gym_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gymNumber') }})
    introduce_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introduceBy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeId') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
