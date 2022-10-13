from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoTopUpConfig:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    min_balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBalance' }})
    target_balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetBalance' }})
    
