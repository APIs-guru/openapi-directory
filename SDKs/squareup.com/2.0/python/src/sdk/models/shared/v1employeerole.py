from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V1EmployeeRole:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_owner' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permissions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
