from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import name


@dataclass_json
@dataclass
class GetPayeeListResponseIndividual:
    name: Optional[name.Name] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
