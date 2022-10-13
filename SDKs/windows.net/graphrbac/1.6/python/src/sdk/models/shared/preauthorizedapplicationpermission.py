from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreAuthorizedApplicationPermission:
    access_grants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessGrants' }})
    direct_access_grant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directAccessGrant' }})
    
