from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OverviewEventPagedResultsPublic:
    continuation_token: Optional[PagedResultsPublicContinuationToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuationToken') }})
    has_more: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMore') }})
    results: Optional[List[OverviewEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
