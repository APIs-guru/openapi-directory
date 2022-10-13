from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SwitchConfigurationContainer:
    can_switch_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanSwitchOff' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    
