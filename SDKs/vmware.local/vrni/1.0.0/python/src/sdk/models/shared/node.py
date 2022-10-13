from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nodetype_enum

class NodeNodeTypeEnum(str, Enum):
    PROXY_VM = "PROXY_VM"
    PLATFORM_VM = "PLATFORM_VM"


@dataclass_json
@dataclass
class Node:
    entity_type: Optional[nodetype_enum.NodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    node_type: Optional[NodeNodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_type' }})
    
