from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Organization:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    asset_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_count') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    deactivated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deactivated_at') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    download_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_token') }})
    download_token_created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_token_created_at') }})
    expiration_assets_offline: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_assets_offline') }})
    expiration_assets_stale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_assets_stale') }})
    expiration_scans: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_scans') }})
    export_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('export_token') }})
    export_token_counter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('export_token_counter') }})
    export_token_created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('export_token_created_at') }})
    export_token_last_used_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('export_token_last_used_at') }})
    export_token_last_used_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('export_token_last_used_by') }})
    inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inactive') }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    permanent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permanent') }})
    project: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    service_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count') }})
    service_count_arp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_arp') }})
    service_count_icmp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_icmp') }})
    service_count_tcp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_tcp') }})
    service_count_udp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_udp') }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
