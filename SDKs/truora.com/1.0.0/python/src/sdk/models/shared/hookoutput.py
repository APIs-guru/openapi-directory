from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hook


@dataclass_json
@dataclass
class HookOutput:
    hooks: Optional[List[hook.Hook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    signing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signing_key' }})
    
