from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addresswithtimezone


@dataclass_json
@dataclass
class Location:
    address: Optional[addresswithtimezone.AddressWithTimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
