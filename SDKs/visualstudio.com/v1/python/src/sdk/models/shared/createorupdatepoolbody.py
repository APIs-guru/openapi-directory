from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import domainusercredentials
from . import hotpoolsettings
from . import vmspecs


@dataclass_json
@dataclass
class CreateOrUpdatePoolBody:
    domain_user_credentials: Optional[domainusercredentials.DomainUserCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainUserCredentials' }})
    hot_pool_settings: Optional[hotpoolsettings.HotPoolSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotPoolSettings' }})
    pool_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poolGroupName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    user_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userGroupName' }})
    vm_specs: vmspecs.VMSpecs = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmSpecs' }})
    
