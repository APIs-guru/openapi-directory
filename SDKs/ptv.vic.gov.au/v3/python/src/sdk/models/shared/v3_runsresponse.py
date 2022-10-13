from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_run
from . import v3_status


@dataclass_json
@dataclass
class V3RunsResponse:
    runs: Optional[List[v3_run.V3Run]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runs' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
