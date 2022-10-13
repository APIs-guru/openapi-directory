from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import user_enum_state_type_enum


@dataclass_json
@dataclass
class FrontlineV1User:
    avatar: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    is_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_available' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    state: Optional[user_enum_state_type_enum.UserEnumStateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
