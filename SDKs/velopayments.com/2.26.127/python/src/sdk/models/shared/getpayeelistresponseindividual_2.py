from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import name_2


@dataclass_json
@dataclass
class GetPayeeListResponseIndividual2:
    name: Optional[name_2.Name2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
