from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Event:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_id' }})
    processed_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processed_at' }})
    processor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processor_id' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_id' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_name' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_type' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_id' }})
    target_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_name' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_type' }})
    
