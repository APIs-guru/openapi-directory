from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupNewProperties:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class GroupNewQueryCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"


@dataclass_json
@dataclass
class GroupNewQueryWhere:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GroupNewQuery:
    composition: Optional[GroupNewQueryCompositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'composition' }})
    select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    where: Optional[List[GroupNewQueryWhere]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    

@dataclass_json
@dataclass
class GroupNew:
    category: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    dynamic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamic' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    properties: Optional[List[GroupNewProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    query: Optional[GroupNewQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
