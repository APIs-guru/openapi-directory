from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customergroup


@dataclass_json
@dataclass
class CreateCustomerGroupRequest:
    group: customergroup.CustomerGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
