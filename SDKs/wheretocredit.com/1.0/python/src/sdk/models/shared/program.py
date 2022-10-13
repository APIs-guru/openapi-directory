from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Program:
    airlines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'airlines' }})
    denomination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denomination' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    program_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programName' }})
    tier_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tierNames' }})
    
