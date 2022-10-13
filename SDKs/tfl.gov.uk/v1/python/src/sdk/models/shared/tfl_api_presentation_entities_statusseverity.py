from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStatusSeverity:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modeName' }})
    severity_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityLevel' }})
    
