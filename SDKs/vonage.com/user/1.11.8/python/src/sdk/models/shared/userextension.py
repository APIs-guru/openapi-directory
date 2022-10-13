from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import did


@dataclass_json
@dataclass
class UserExtension:
    dids: Optional[List[did.Did]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dids' }})
    extension_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension_number' }})
    
