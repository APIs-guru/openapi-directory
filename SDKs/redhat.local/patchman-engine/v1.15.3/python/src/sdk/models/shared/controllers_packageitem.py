from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ControllersPackageItem:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    systems_installed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systems_installed' }})
    systems_updatable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systems_updatable' }})
    
