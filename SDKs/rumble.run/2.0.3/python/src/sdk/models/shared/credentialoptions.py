from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CredentialOptionsTypeEnum(str, Enum):
    MIRADORE_API_KEY_V1 = "miradore_api_key_v1"
    AWS_ACCESS_SECRET = "aws_access_secret"


@dataclass_json
@dataclass
class CredentialOptions:
    acl: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    cidrs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrs') }})
    global_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secret: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    type: Optional[CredentialOptionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
