from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlatformParentSingle:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platforms: List[Platform] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    
