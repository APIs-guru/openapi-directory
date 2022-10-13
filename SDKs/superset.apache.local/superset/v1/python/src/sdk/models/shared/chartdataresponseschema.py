from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chartdataresponseresult


@dataclass_json
@dataclass
class ChartDataResponseSchema:
    result: Optional[List[chartdataresponseresult.ChartDataResponseResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
