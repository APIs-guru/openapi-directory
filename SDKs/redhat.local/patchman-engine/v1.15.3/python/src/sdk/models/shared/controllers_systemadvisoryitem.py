from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import controllers_systemadvisoryitemattributes


@dataclass_json
@dataclass
class ControllersSystemAdvisoryItem:
    attributes: Optional[controllers_systemadvisoryitemattributes.ControllersSystemAdvisoryItemAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
