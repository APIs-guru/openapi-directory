from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vaccine


@dataclass_json
@dataclass
class VaccineResponse:
    age: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    vaccinations: Optional[List[vaccine.Vaccine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vaccinations' }})
    
