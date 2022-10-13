from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemImportRequestUserAuth:
    auth_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_token' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
