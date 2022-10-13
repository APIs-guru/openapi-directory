from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Version:
    codename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codename' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    is_beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_beta' }})
    is_deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_deprecated' }})
    is_hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_hidden' }})
    is_stable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_stable' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
