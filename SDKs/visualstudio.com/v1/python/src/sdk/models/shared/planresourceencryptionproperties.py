from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlanResourceEncryptionProperties:
    key_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySource') }})
    key_vault_properties: Optional[PlanResourceKeyVaultProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyVaultProperties') }})
    
