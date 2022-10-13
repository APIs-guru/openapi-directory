from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BulkexportsV1ExportJob:
    details: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    end_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_day' }})
    estimated_completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_completion_time' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    job_queue_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_queue_position' }})
    job_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_sid' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    start_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_day' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    webhook_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_method' }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_url' }})
    
