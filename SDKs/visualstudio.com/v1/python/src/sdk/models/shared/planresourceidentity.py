from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlanResourceIdentity:
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
