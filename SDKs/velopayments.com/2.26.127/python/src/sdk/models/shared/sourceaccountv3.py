from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceAccountV3:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    source_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountId' }})
    source_account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountName' }})
    total_payout_cost: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPayoutCost' }})
    
