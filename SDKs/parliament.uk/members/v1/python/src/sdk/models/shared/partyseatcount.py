from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import party


@dataclass_json
@dataclass
class PartySeatCount:
    female: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'female' }})
    male: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'male' }})
    non_binary: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonBinary' }})
    party: Optional[party.Party] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
