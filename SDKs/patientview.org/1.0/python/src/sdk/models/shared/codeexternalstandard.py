from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import externalstandard


@dataclass_json
@dataclass
class CodeExternalStandard:
    code_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeString' }})
    external_standard: Optional[externalstandard.ExternalStandard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalStandard' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
