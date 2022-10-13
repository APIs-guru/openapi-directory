from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import planresourceidentity
from . import planresourceproperties


@dataclass_json
@dataclass
class PlanResource:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identity: Optional[planresourceidentity.PlanResourceIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[planresourceproperties.PlanResourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    provisioning_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningState' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
