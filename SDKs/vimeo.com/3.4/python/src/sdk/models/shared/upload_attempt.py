from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UploadAttempt:
    ticket_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticket_id') }})
    upload_link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: User = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    clip: Optional[Video] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clip') }})
    complete_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    
