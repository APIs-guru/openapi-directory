from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import releaseeventforapicontract


@dataclass_json
@dataclass
class PartialFindResultReleaseEventForAPIContract:
    items: Optional[List[releaseeventforapicontract.ReleaseEventForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
