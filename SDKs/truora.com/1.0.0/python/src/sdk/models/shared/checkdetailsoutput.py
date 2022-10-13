from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import checkdetails


@dataclass_json
@dataclass
class CheckDetailsOutput:
    details: List[checkdetails.CheckDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
