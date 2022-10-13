from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import customergroup


@dataclass_json
@dataclass
class RetrieveCustomerGroupResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    group: Optional[customergroup.CustomerGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    
