from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Wireless:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    agent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent_name') }})
    authentication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    bssid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bssid') }})
    channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    encryption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }})
    essid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('essid') }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    last_agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_agent_id') }})
    last_seen: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen') }})
    last_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_task_id') }})
    org_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_name') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_id') }})
    signal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signal') }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    site_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    
