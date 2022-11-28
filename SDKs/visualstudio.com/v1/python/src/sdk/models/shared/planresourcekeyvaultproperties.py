from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlanResourceKeyVaultProperties:
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyName') }})
    key_vault_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyVaultUri') }})
    key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyVersion') }})
    
