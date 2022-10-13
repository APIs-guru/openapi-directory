from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetrelatedchart


@dataclass_json
@dataclass
class DatasetRelatedCharts:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    result: Optional[List[datasetrelatedchart.DatasetRelatedChart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
