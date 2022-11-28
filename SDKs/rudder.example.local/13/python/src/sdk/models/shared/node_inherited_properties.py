from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodeInheritedPropertiesPropertiesHierarchyKindEnum(str, Enum):
    GLOBAL = "global"
    GROUP = "group"


@dataclass_json
@dataclass
class NodeInheritedPropertiesPropertiesHierarchy:
    kind: NodeInheritedPropertiesPropertiesHierarchyKindEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class NodeInheritedPropertiesPropertiesProviderEnum(str, Enum):
    INHERITED = "inherited"
    OVERRIDDEN = "overridden"
    PLUGIN_NAME_LIKE_DATASOURCES = "plugin name like datasources"


@dataclass_json
@dataclass
class NodeInheritedPropertiesProperties:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    hierarchy: Optional[List[NodeInheritedPropertiesPropertiesHierarchy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchy') }})
    origval: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origval') }})
    provider: Optional[NodeInheritedPropertiesPropertiesProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    

@dataclass_json
@dataclass
class NodeInheritedProperties:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    properties: List[NodeInheritedPropertiesProperties] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
