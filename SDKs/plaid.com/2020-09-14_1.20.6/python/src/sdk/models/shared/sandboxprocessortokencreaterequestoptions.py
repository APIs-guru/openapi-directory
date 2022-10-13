from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SandboxProcessorTokenCreateRequestOptions:
    override_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'override_password' }})
    override_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'override_username' }})
    
