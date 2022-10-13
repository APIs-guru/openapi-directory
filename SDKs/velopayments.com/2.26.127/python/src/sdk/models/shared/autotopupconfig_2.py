from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoTopUpConfig2:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    funding_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingAccountId' }})
    min_balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBalance' }})
    target_balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetBalance' }})
    
