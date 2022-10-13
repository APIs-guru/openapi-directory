from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum


@dataclass_json
@dataclass
class Application:
    create_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_time' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified_by' }})
    last_modified_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified_time' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
