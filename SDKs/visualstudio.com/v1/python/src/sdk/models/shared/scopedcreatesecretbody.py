from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScopedCreateSecretBody:
    filters: Optional[List[SecretFilterBody]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    scope: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    secret_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretName') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
