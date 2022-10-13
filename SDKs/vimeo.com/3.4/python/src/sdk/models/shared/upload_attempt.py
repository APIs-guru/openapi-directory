from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import video
from . import user


@dataclass_json
@dataclass
class UploadAttempt:
    clip: Optional[video.Video] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clip' }})
    complete_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complete_uri' }})
    form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    ticket_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticket_id' }})
    upload_link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_link' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: user.User = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
