from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import useridentity


@dataclass_json
@dataclass
class ClaimVMBody:
    user: useridentity.UserIdentity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
