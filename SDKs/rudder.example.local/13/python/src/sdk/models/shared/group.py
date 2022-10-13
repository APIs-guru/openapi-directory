from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupProperties:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class GroupQueryCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"


@dataclass_json
@dataclass
class GroupQueryWhere:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GroupQuery:
    composition: Optional[GroupQueryCompositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'composition' }})
    select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    where: Optional[List[GroupQueryWhere]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    

@dataclass_json
@dataclass
class Group:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    dynamic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamic' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    group_class: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupClass' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIds' }})
    properties: Optional[List[GroupProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    query: Optional[GroupQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
