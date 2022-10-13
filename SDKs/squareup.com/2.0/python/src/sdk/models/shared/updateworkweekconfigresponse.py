from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import workweekconfig


@dataclass_json
@dataclass
class UpdateWorkweekConfigResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    workweek_config: Optional[workweekconfig.WorkweekConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workweek_config' }})
    
