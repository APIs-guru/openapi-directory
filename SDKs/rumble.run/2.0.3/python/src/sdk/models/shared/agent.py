from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Agent:
    arch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arch' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    connected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    deactivated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deactivated_at' }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ip' }})
    host_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host_id' }})
    hub_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hub_id' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inactive' }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal_ip' }})
    last_checkin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_checkin' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_id' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_id' }})
    system_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system_info' }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
