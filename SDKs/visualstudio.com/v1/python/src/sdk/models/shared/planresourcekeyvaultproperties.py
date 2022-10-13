from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlanResourceKeyVaultProperties:
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyName' }})
    key_vault_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyVaultUri' }})
    key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyVersion' }})
    
