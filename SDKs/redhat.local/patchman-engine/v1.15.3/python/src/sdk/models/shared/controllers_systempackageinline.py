from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ControllersSystemPackageInline:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    evra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evra' }})
    latest_evra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_evra' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    updatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatable' }})
    
