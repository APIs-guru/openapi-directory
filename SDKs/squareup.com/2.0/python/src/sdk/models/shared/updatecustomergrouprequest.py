from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import customergroup


@dataclass_json
@dataclass
class UpdateCustomerGroupRequest:
    group: customergroup.CustomerGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    
