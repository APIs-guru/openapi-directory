from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VeteranStatusRequestGenderEnum(str, Enum):
    M = "M"
    F = "F"


@dataclass_json
@dataclass
class VeteranStatusRequest:
    birth_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birth_date' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    gender: Optional[VeteranStatusRequestGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    ssn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssn' }})
    
