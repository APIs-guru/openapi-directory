from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StudioV2FlowValidate:
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    
