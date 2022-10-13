from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrgOptions:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiration_assets_offline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_assets_offline' }})
    expiration_assets_stale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_assets_stale' }})
    expiration_scans: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_scans' }})
    export_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'export_token' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    
