from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DistrictList:
    abbreviation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
