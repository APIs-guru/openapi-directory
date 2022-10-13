from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import user
from . import video


@dataclass_json
@dataclass
class Credit:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    video: Optional[video.Video] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    
