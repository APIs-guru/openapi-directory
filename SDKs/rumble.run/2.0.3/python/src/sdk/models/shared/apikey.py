from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIKey:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    counter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counter') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inactive') }})
    last_used_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_used_at') }})
    last_used_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_used_ip') }})
    last_used_ua: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_used_ua') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_id') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_limit') }})
    usage_today: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_today') }})
    
