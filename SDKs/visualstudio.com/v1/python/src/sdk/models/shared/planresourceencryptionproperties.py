from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import planresourcekeyvaultproperties


@dataclass_json
@dataclass
class PlanResourceEncryptionProperties:
    key_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keySource' }})
    key_vault_properties: Optional[planresourcekeyvaultproperties.PlanResourceKeyVaultProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyVaultProperties' }})
    
