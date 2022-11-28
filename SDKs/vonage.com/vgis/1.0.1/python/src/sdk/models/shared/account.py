from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountStatusEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclass
class AccountUcisHealth:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class AccountUcis:
    health: Optional[AccountUcisHealth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ucp_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ucpAccountId') }})
    ucp_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ucpLabel') }})
    

@dataclass_json
@dataclass
class Account:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    status: Optional[AccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    ucis: Optional[List[AccountUcis]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ucis') }})
    
