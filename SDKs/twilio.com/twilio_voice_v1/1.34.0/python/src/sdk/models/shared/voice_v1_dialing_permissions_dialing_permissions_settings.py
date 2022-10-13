from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VoiceV1DialingPermissionsDialingPermissionsSettings:
    dialing_permissions_inheritance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialing_permissions_inheritance' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
