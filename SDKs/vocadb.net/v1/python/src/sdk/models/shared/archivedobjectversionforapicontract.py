from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ArchivedObjectVersionForAPIContract:
    changed_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changedFields' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
