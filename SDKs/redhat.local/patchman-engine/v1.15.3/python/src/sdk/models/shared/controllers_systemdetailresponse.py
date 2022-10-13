from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import controllers_systemitem


@dataclass_json
@dataclass
class ControllersSystemDetailResponse:
    data: Optional[controllers_systemitem.ControllersSystemItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
