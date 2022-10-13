from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Task:
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent_id' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    created_by_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by_user_id' }})
    cruncher_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cruncher_id' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_id' }})
    params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    recur: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recur' }})
    recur_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recur_frequency' }})
    recur_last: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recur_last' }})
    recur_last_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recur_last_task_id' }})
    recur_next: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recur_next' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_id' }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    stats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
