from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PoolResult:
    pool_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolGroupName') }})
    vm_specs: VMSpecs = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmSpecs') }})
    domain_user_credentials: Optional[DomainUserCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUserCredentials') }})
    hot_pool_settings: Optional[HotPoolSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotPoolSettings') }})
    provisioning_status: Optional[ProvisioningStatusResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningStatus') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userGroupName') }})
    
