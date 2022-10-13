from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nodetype_enum


@dataclass_json
@dataclass
class NodeID:
    entity_type: Optional[nodetype_enum.NodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
