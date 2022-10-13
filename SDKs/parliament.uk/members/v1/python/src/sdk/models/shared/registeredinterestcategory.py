from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registeredinterest


@dataclass_json
@dataclass
class RegisteredInterestCategory:
    interests: Optional[List[registeredinterest.RegisteredInterest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interests' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
