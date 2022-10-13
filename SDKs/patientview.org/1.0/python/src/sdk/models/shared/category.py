from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Category:
    friendly_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyDescription' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    icd10_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icd10Description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    
