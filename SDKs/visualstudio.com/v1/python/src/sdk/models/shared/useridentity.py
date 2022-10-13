from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserIdentity:
    user_principal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPrincipalName' }})
    
