from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfileSpecifier:
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oid' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    tid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tid' }})
    
