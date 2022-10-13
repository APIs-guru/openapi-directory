from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import planresource


@dataclass_json
@dataclass
class PlanResourceList:
    value: Optional[List[planresource.PlanResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
