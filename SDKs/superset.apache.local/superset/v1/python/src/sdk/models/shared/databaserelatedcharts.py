from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import databaserelatedchart


@dataclass_json
@dataclass
class DatabaseRelatedCharts:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    result: Optional[List[databaserelatedchart.DatabaseRelatedChart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
