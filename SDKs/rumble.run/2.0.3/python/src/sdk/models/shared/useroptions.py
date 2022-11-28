from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserOptions:
    client_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_admin') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    org_default_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_default_role') }})
    org_roles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_roles') }})
    
