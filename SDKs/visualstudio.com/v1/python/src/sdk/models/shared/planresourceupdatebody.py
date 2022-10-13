from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import planresourceidentity
from . import planresourceproperties


@dataclass_json
@dataclass
class PlanResourceUpdateBody:
    identity: Optional[planresourceidentity.PlanResourceIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    properties: Optional[planresourceproperties.PlanResourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
