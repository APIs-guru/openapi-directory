from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserDto:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    external_entity_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalEntityNumber' }})
    guardian: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guardian' }})
    gym_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gymNumber' }})
    introduce_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introduceBy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeId' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
