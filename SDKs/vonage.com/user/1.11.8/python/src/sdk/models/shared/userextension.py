from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserExtension:
    dids: Optional[List[Did]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dids') }})
    extension_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    
