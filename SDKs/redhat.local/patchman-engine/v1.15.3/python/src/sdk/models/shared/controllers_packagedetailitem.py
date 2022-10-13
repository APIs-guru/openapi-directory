from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import controllers_packagedetailattributes


@dataclass_json
@dataclass
class ControllersPackageDetailItem:
    attributes: Optional[controllers_packagedetailattributes.ControllersPackageDetailAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
