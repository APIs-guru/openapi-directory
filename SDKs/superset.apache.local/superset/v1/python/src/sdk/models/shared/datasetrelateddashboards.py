from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetrelateddashboard


@dataclass_json
@dataclass
class DatasetRelatedDashboards:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    result: Optional[List[datasetrelateddashboard.DatasetRelatedDashboard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
