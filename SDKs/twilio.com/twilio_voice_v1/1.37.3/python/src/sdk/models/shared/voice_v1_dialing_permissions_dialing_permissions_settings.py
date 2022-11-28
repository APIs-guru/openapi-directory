from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VoiceV1DialingPermissionsDialingPermissionsSettings:
    dialing_permissions_inheritance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialing_permissions_inheritance') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
