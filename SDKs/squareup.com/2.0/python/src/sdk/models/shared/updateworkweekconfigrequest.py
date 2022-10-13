from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workweekconfig


@dataclass_json
@dataclass
class UpdateWorkweekConfigRequest:
    workweek_config: workweekconfig.WorkweekConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workweek_config' }})
    
