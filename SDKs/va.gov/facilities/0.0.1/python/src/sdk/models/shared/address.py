from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Address:
    address_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_1' }})
    address_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_2' }})
    address_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_3' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
