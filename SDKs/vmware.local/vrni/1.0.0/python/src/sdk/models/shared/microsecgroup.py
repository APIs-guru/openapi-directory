from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reference


@dataclass_json
@dataclass
class MicroSecGroup:
    entity: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    
