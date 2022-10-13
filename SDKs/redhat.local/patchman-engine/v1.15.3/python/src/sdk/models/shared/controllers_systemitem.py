from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import controllers_systemitemattributes


@dataclass_json
@dataclass
class ControllersSystemItem:
    attributes: Optional[controllers_systemitemattributes.ControllersSystemItemAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
