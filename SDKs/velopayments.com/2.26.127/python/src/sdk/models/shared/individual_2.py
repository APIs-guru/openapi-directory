from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Individual2:
    date_of_birth: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOfBirth' }})
    name: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    national_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nationalIdentification' }})
    
