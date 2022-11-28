from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PreAuthorizedApplicationPermission:
    r"""PreAuthorizedApplicationPermission
    Contains information about the pre-authorized permissions.
    """
    
    access_grants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessGrants') }})
    direct_access_grant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directAccessGrant') }})
    
