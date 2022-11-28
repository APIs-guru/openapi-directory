from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Assets:
    items: Optional[List[Asset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    pagination: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
