from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sandboxprocessortokencreaterequestoptions


@dataclass_json
@dataclass
class SandboxProcessorTokenCreateRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    institution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'institution_id' }})
    options: Optional[sandboxprocessortokencreaterequestoptions.SandboxProcessorTokenCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
