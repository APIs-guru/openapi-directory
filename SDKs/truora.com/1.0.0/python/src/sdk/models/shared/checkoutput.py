from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import check


@dataclass_json
@dataclass
class CheckOutput:
    check: check.Check = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check' }})
    details: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
