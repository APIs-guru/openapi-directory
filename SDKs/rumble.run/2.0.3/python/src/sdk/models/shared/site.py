from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Site:
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    excludes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permanent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permanent' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
