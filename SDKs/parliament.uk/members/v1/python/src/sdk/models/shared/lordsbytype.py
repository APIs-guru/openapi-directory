from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import party


@dataclass_json
@dataclass
class LordsByType:
    bishop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bishop' }})
    hereditary: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hereditary' }})
    life: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'life' }})
    party: Optional[party.Party] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
