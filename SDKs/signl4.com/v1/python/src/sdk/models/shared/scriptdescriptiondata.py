from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScriptDescriptionData:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptType' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    
