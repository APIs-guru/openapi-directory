from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v3_run
from . import v3_status


@dataclass_json
@dataclass
class V3RunResponse:
    run: Optional[v3_run.V3Run] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run' }})
    status: Optional[v3_status.V3Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
