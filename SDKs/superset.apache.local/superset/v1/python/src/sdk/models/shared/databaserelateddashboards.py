from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import databaserelateddashboard


@dataclass_json
@dataclass
class DatabaseRelatedDashboards:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    result: Optional[List[databaserelateddashboard.DatabaseRelatedDashboard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
