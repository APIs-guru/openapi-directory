from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CredentialTypeEnum(str, Enum):
    MIRADORE_API_KEY_V1 = "miradore_api_key_v1"
    AWS_ACCESS_SECRET = "aws_access_secret"


@dataclass_json
@dataclass
class Credential:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    acl: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrs') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    created_by_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by_email') }})
    created_by_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by_id') }})
    global_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    last_used_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_used_at') }})
    last_used_by_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_used_by_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[CredentialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
