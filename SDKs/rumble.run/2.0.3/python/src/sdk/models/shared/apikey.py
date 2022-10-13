from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIKey:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    counter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counter' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inactive' }})
    last_used_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_used_at' }})
    last_used_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_used_ip' }})
    last_used_ua: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_used_ua' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_id' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    usage_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_limit' }})
    usage_today: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_today' }})
    
