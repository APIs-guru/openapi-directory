from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import models_packageupdate


@dataclass_json
@dataclass
class ControllersSystemPackageData:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    evra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evra' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    updatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatable' }})
    updates: Optional[List[models_packageupdate.ModelsPackageUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updates' }})
    
