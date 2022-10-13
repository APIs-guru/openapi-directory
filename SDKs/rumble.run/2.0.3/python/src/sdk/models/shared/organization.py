from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Organization:
    asset_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_count' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    deactivated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deactivated_at' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    download_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_token' }})
    download_token_created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_token_created_at' }})
    expiration_assets_offline: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_assets_offline' }})
    expiration_assets_stale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_assets_stale' }})
    expiration_scans: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_scans' }})
    export_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'export_token' }})
    export_token_counter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'export_token_counter' }})
    export_token_created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'export_token_created_at' }})
    export_token_last_used_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'export_token_last_used_at' }})
    export_token_last_used_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'export_token_last_used_by' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inactive' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    permanent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permanent' }})
    project: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    service_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_count' }})
    service_count_arp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_count_arp' }})
    service_count_icmp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_count_icmp' }})
    service_count_tcp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_count_tcp' }})
    service_count_udp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_count_udp' }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
