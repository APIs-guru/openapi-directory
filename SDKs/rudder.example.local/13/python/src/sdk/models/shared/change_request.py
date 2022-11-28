from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChangeRequestChangesRules:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass_json
@dataclass
class ChangeRequestChanges:
    rules: Optional[List[ChangeRequestChangesRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ChangeRequestStatusEnum(str, Enum):
    DEPLOYED = "Deployed"
    PENDING_DEPLOYMENT = "Pending deployment"
    CANCELLED = "Cancelled"
    PENDING_VALIDATION = "Pending validation"
    OPEN = "Open"


@dataclass_json
@dataclass
class ChangeRequest:
    r"""ChangeRequest
    Content of the change request
    """
    
    acceptable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptable') }})
    changes: Optional[ChangeRequestChanges] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created by') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[ChangeRequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
