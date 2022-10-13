from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModelsPackageUpdate:
    advisory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advisory' }})
    evra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evra' }})
    
