from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePasswordInfo:
    current_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPassword' }})
    new_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPassword' }})
    
