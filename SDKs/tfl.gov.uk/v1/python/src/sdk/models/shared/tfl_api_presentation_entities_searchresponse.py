from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesSearchResponse:
    from_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    matches: Optional[List[TflAPIPresentationEntitiesSearchMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    max_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxScore') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
