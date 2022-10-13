from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ControllersAdvisoryDetailAttributes:
    cves: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cves' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fixes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixes' }})
    modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_date' }})
    packages: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    public_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_date' }})
    references: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    solution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solution' }})
    synopsis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synopsis' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
