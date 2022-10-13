from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class UserEmbeddedObject:
    data: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
