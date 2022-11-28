from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NsxvManagerDataSourceRequest:
    credentials: PasswordCredentials = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    nickname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    proxy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_id') }})
    vcenter_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcenter_id') }})
    central_cli_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('central_cli_enabled') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fqdn') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    ipfix_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipfix_enabled') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    
