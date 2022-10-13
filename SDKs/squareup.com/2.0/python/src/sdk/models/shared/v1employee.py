from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V1Employee:
    authorized_location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_location_ids' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    role_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role_ids' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
