from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NumbersV2RegulatoryComplianceEndUserType:
    fields: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    machine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machine_name' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
