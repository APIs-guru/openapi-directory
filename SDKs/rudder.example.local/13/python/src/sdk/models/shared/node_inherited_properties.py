from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class NodeInheritedPropertiesPropertiesHierarchyKindEnum(str, Enum):
    GLOBAL = "global"
    GROUP = "group"


@dataclass_json
@dataclass
class NodeInheritedPropertiesPropertiesHierarchy:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: NodeInheritedPropertiesPropertiesHierarchyKindEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class NodeInheritedPropertiesPropertiesProviderEnum(str, Enum):
    INHERITED = "inherited"
    OVERRIDDEN = "overridden"
    PLUGIN_NAME_LIKE_DATASOURCES = "plugin name like datasources"


@dataclass_json
@dataclass
class NodeInheritedPropertiesProperties:
    hierarchy: Optional[List[NodeInheritedPropertiesPropertiesHierarchy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hierarchy' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origval: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origval' }})
    provider: Optional[NodeInheritedPropertiesPropertiesProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    value: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class NodeInheritedProperties:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    properties: List[NodeInheritedPropertiesProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
