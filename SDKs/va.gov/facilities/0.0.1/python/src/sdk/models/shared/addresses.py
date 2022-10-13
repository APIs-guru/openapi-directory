from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address
from . import address


@dataclass_json
@dataclass
class Addresses:
    mailing: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing' }})
    physical: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physical' }})
    
