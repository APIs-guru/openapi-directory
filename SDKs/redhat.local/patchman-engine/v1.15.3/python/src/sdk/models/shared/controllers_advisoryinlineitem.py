from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ControllersAdvisoryInlineItem:
    advisory_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advisory_type' }})
    applicable_systems: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicable_systems' }})
    cve_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cve_count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    public_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_date' }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    synopsis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synopsis' }})
    
