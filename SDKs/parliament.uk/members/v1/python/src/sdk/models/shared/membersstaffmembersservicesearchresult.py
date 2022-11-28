from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembersStaffMembersServiceSearchResult:
    items: Optional[List[MembersStaffItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    links: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    result_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultContext') }})
    skip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip') }})
    take: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('take') }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
