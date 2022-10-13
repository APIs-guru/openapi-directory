from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AlertSettings:
    filter_action: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterAction' }})
    filter_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterMode' }})
    opt_out_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optOutMode' }})
    persistent_notificication_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentNotificicationMode' }})
    response_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseMode' }})
    response_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTime' }})
    
