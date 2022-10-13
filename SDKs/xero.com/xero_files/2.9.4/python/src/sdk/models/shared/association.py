from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import objectgroup_enum
from . import objecttype_enum


@dataclass_json
@dataclass
class Association:
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileId' }})
    object_group: Optional[objectgroup_enum.ObjectGroupEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectGroup' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectId' }})
    object_type: Optional[objecttype_enum.ObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectType' }})
    
