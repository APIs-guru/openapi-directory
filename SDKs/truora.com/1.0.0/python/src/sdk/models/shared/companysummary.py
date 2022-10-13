from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namefound


@dataclass_json
@dataclass
class CompanySummary:
    names_found: Optional[List[namefound.NameFound]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names_found' }})
    
