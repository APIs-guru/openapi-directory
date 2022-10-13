from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectiveNewTags:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class DirectiveNew:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longDescription' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    system: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    tags: Optional[List[DirectiveNewTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    technique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'techniqueName' }})
    technique_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'techniqueVersion' }})
    
