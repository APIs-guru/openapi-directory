from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secretfilterbody


@dataclass_json
@dataclass
class ScopedCreateSecretBody:
    filters: Optional[List[secretfilterbody.SecretFilterBody]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    scope: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    secret_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretName' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
