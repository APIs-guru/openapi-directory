from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChangeAlertStatusMultipleInfo:
    alert_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertIds' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
