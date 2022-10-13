from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SiteOptions:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    excludes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
