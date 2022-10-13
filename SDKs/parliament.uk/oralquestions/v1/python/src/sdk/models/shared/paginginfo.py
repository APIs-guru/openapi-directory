from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statuscount


@dataclass_json
@dataclass
class PagingInfo:
    skip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Skip' }})
    status_counts: Optional[List[statuscount.StatusCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCounts' }})
    take: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Take' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    
