from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoTopUpConfig:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    min_balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBalance') }})
    target_balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetBalance') }})
    
