from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VsoPlanInfo:
    location: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    provider_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerNamespace') }})
    resource_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroup') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
