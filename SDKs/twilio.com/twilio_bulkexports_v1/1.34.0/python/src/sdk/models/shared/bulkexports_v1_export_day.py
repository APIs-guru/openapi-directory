from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BulkexportsV1ExportDay:
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_date' }})
    day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
