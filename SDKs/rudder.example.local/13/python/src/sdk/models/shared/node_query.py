from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class NodeQueryCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"


@dataclass_json
@dataclass
class NodeQueryWhere:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class NodeQuery:
    composition: Optional[NodeQueryCompositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'composition' }})
    select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    where: Optional[List[NodeQueryWhere]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    
