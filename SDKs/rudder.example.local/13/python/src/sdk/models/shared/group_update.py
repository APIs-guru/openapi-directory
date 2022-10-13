from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GroupUpdateQueryCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"


@dataclass_json
@dataclass
class GroupUpdateQueryWhere:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GroupUpdateQuery:
    composition: Optional[GroupUpdateQueryCompositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'composition' }})
    select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    where: Optional[List[GroupUpdateQueryWhere]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    

@dataclass_json
@dataclass
class GroupUpdate:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    dynamic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamic' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    query: Optional[GroupUpdateQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
