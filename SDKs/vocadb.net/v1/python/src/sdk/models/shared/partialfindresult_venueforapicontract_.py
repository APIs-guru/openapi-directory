from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartialFindResultVenueForAPIContract:
    items: Optional[List[VenueForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
